import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service'; 

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data: any; 
  access: string | null = sessionStorage.getItem("access");

  constructor(private apiService: GenericApiService, private router: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    if (!this.access) {
      console.error('No access token found');
      return;
    }

    const headers = {
      'Authorization': `Bearer ${this.access}`
    };

    this.apiService.get('users/get_user', { headers }).subscribe(
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

  logout(): void {
  
    const confirmed = window.confirm('Are you sure you want to log out?');
  
    
    if (confirmed) {
      sessionStorage.clear(); 
      this.router.navigate(['/login']); 
    }
  }
  
}
