import { Component,OnInit  } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements OnInit {
  apiUrl = 'http://localhost:8000/api/Product_Table/';  // Your API endpoint
  data: any[] = [];  // Initialize an empty array for the data

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      const response = await axios.get(this.apiUrl);
      this.data = response.data;  // Extract and store the data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}