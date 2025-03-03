import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service'; // Adjust the path as necessary

@Component({
  selector: 'app-analysis-chart',
  templateUrl: './analysis-chart.component.html',
  styleUrls: ['./analysis-chart.component.css']
})
export class AnalysisChartComponent implements OnInit, AfterViewInit {
  data: any[] = []; 
  chartOptions: any;
  usernumber: any;
  shipping: any;
  order: any;
  feedback: any;
  private access: string | null = sessionStorage.getItem("access");

  constructor(private apiService: GenericApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.fetchData();
    
  }

  ngAfterViewInit() {

    this.chartdata();
    this.usercount();
    this.orderscount();
    this.shippingcount();
    this.feedbackcount();
  }

  chartdata() {
    this.chartOptions = {
      animationEnabled: true, 
      backgroundColor: "#F5DEB3",
      title: {
        text: "Order Analysis"
      },
      axisY: {
        title: "Total Price",
        valueFormatString: "#0,,.",
        suffix: "K" 
      },
      data: [{
        type: "splineArea",
        color: "rgba(54,158,173,.7)",
        xValueFormatString: "YYYY-MM-DD", 
        dataPoints: [] 
      }]
    };
  }

  fetchData() {
    this.apiService.get('orders/')
      .subscribe(
        (response: any) => {
          this.data = response; 
          console.log('Data fetched successfully', this.data);
          this.updateChart();
        },
        error => {
          console.error('Error fetching data', error);
          alert('Error fetching data. Please try again.');
        }
      );


      
      
  }

  updateChart() {
    
    const dataPoints = this.data.map((item: any) => ({
      x: new Date(item.order_date),
      y: item.total_price 
    }));

    if (this.chartOptions) {
      this.chartOptions.data[0].dataPoints = dataPoints;

     
      this.cdr.detectChanges();
    }
  }


  usercount() {
    this.apiService.get('admin/users/')
      .subscribe(
        (response: any) => {
          this.usernumber = response.length;
          console.log(response); 
        },
        error => {
          console.error('Error fetching user data', error);
          alert('Error fetching user data. Please try again.');
        }
      );
  }

 
  orderscount() {
    this.apiService.get('orders/')
      .subscribe(
        (response: any) => {
          this.order = response.length; 
          console.log("usercount", this.usernumber); 
          console.log(this.order); 
        },
        error => {
          console.error('Error fetching order data', error);
          alert('Error fetching order data. Please try again.');
        }
      );
  }

  
  shippingcount() {
    this.apiService.get('shipping/')
      .subscribe(
        (response: any) => {
          this.shipping = response.length; 
        },
        error => {
          console.error('Error fetching shipping data', error);
          alert('Error fetching shipping data. Please try again.');
        }
      );
  }


  feedbackcount() {
    this.apiService.get('feedback/')
      .subscribe(
        (response: any) => {
          this.feedback = response.length; 
        },
        error => {
          console.error('Error fetching feedback data', error);
          alert('Error fetching feedback data. Please try again.');
        }
      );
  }
}
