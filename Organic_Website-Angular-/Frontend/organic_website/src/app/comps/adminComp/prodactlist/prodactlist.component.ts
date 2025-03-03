import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GenericApiService } from '../../../services/apiservice/axiosservices.service';
@Component({
  selector: 'app-prodactlist',
  templateUrl: './prodactlist.component.html',
  styleUrls: ['./prodactlist.component.css']
})
export class ProdactlistComponent implements OnInit {
  data: any[] = []; 
  filteredData: any[] = []; 
  searchTerm: string = ''; 
  currentPage: number = 1;
  pageSize: number = 4;
  access: string | null = sessionStorage.getItem("access");

  constructor(private apiService: GenericApiService, private route: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredData.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  fetchData() {
    this.apiService.get('Product_Table/')
      .subscribe(
        (response: any) => {
          this.data = response; 
          this.filteredData = this.data; 
          this.filterProducts();
          console.log('Data fetched successfully', this.data);
        },
        error => {
          console.error('Error fetching data', error);
          alert('Error fetching data. Please try again.');
        }
      );
  }

  filterProducts() {
    if (!this.searchTerm) {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter(product => 
        product.P_Name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; 
  }

  deleteDataprodact(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.apiService.delete(`Product_Table/${id}`)
        .subscribe(
          () => {
            this.data = this.data.filter(item => item.id !== id); 
            this.filterProducts(); 
            alert('Product deleted successfully!');
          },
          error => {
            console.error('Error deleting product', error);
            alert('Error deleting product. Please try again.');
          }
        );
    }
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
