import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service'; 

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackData: any[] = [];
  displayedFeedback: any[] = []; 
  currentPage: number = 1;
  pageSize: number = 8;
  searchTerm: string = ''; 

  constructor(private apiService: GenericApiService, private route: Router) {}

  ngOnInit() {
    this.fetchFeedback();
  }

  fetchFeedback() {
    this.apiService.get('feedback/')
      .subscribe(
        (response: any) => {
          this.feedbackData = response; 
          this.filterFeedback(); 
          this.updatePageData(); 
        },
        error => {
          console.error('Error fetching data', error);
          alert('Error fetching data. Please try again.');
        }
      );
  }

  searchFeedback() {
    this.filterFeedback(); 
    
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    } else {
      this.updatePageData();
    }
  }

  filterFeedback() {
    if (this.searchTerm.trim() === '') {
      this.displayedFeedback = [...this.feedbackData];
    } else {
      this.displayedFeedback = this.feedbackData.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; 
    this.updatePageData();
  }

  updatePageData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedFeedback = this.displayedFeedback.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePageData();
    }
  }

  deleteFeedback(feedbackId: number) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.apiService.delete(`feedback/${feedbackId}`)
        .subscribe(
          () => {
            
            this.feedbackData = this.feedbackData.filter(item => item.id !== feedbackId);
            this.filterFeedback(); 
            this.updatePageData(); 
          },
          error => {
            console.error('Error deleting feedback', error);
            alert('Error deleting feedback. Please try again.');
          }
        );
    }
  }

  get totalPages() {
    return Math.ceil(this.displayedFeedback.length / this.pageSize);
  }
}
