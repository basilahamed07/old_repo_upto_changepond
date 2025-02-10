import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service'; 

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public data: any[] = []; 
  access: string | null = sessionStorage.getItem("access");
  searchQuery: string = ''; 

  constructor(private apiService: GenericApiService, private router: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const headers = { 'Authorization': `Bearer ${this.access}` };

    this.apiService.get('admin/users/', { headers })
      .subscribe(
        (response: any) => {
          this.data = response; 
          console.log('Data fetched successfully', this.data);
        },
        error => {
          console.error('Error fetching data', error);
          alert('Error fetching data. Please try again.');
        }
      );
  }

  deleteData(id: number) {
    const headers = { 'Authorization': `Bearer ${this.access}` };

    if (confirm('Are you sure you want to delete this user?')) {
      this.apiService.delete(`admin/users/${id}/delete/`, { headers })
        .subscribe(
          () => {
            this.data = this.data.filter(item => item.id !== id);
            alert('User deleted successfully!');
          },
          error => {
            console.error('Error deleting user', error);
            alert('Error deleting user. Please try again.');
          }
        );
    }
  }

  filteredData() {
    if (!this.searchQuery) {
      return this.data;
    }
    return this.data.filter(user =>
      user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
