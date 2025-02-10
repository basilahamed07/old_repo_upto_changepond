import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service';

@Component({
  selector: 'app-copond',
  templateUrl: './copond.component.html',
  styleUrls: ['./copond.component.css']
})
export class CopondComponent implements OnInit {
  data: any[] = []; 
  paginatedData: any[] = []; 
  searchTerm: string = ''; 
  currentPage: number = 1; 
  itemsPerPage: number = 6; 
  totalPages: number = 1; 
  access: string | null = sessionStorage.getItem("access");

  constructor(private apiService: GenericApiService, private route: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.get('coupon/')
      .subscribe(
        (response: any) => {
          this.data = response; 
          this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
          this.updatePaginatedData(); 
          console.log('Data fetched successfully', this.data);
        },
        error => {
          console.error('Error fetching data', error);
          alert('Error fetching data. Please try again.');
        }
      );
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  searchCoupons() {
   
    const filteredData = this.data.filter(item => item.code.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.data = filteredData;
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    this.currentPage = 1; 
    this.updatePaginatedData();
  }

  changePage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.updatePaginatedData();
    }
  }
}
