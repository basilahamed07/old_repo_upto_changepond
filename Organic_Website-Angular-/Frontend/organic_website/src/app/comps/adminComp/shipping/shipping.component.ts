import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service'; 

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  data: any[] = []; 
  filteredData: any[] = []; 
  displayedData: any[] = []; 
  currentPage: number = 1;
  pageSize: number = 5;
  searchTerm: string = ''; 

  constructor(private apiService: GenericApiService, private route: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.get('shipping/')
      .subscribe(
        (response: any[]) => {
          this.data = response.map(item => ({
            ...item,
            created_at: new Date(item.created_at), 
            shipping_status: this.calculateStatus(item)
          }));
          this.filterData(); 
          this.updatePageData(); 
        },
        error => {
          console.error('Error fetching data', error);
          alert('Error fetching data. Please try again.');
        }
      );
  }

  calculateStatus(item: any): string {
    const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000;
    const now = new Date();
    const createdAt = new Date(item.created_at);

    if (item.shipping_status === 'pending' && now.getTime() - createdAt.getTime() > twoDaysInMillis) {
      return 'delivered';
    }

    return item.shipping_status;
  }

  searchByTrackingId() {
    this.filterData(); 
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    } else {
      this.updatePageData();
    }
  }

  filterData() {
    if (this.searchTerm.trim() === '') {
      this.filteredData = this.data.map(item => ({
        ...item,
        shipping_status: this.calculateStatus(item) 
      }));
    } else {
      this.filteredData = this.data
        .filter(item =>
          item.tracking_id.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
        )
        .map(item => ({
          ...item,
          shipping_status: this.calculateStatus(item) 
        }));
    }
    this.currentPage = 1; 
    this.updatePageData();
  }

  updatePageData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.filteredData.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePageData();
    }
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }
}
