import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service';
import { MessageService } from 'primeng/api'; 

@Component({
  selector: 'app-generatecop',
  templateUrl: './generatecop.component.html',
  styleUrls: ['./generatecop.component.css'],
  providers: [MessageService] 
})
export class GeneratecopComponent implements OnInit {
  discountForm: any;
  access: string | null = sessionStorage.getItem("access");

  constructor(
    private apiService: GenericApiService,
    private router: Router,
    private messageService: MessageService 
  ) {}

  ngOnInit(): void {
    this.access = sessionStorage.getItem("access");
    
    
    this.discountForm = new FormGroup({
      discount: new FormControl('', [
        Validators.required, 
        Validators.pattern('^[0-9]+$'), 
        Validators.min(0),
        Validators.max(100) 
      ])
    });
  }

  onSubmit(): void {
    if (this.discountForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Form is invalid. Please correct the errors and try again.' });
      return;
    } else {
      const discountValue = this.discountForm.value.discount;
      const headers = {
        'Authorization': `Bearer ${this.access}`
      };

      const formData = new FormData();
      formData.append('discount', discountValue);

      this.apiService.post('coupon/', formData, { headers }).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Coupon created successfully!' });
          this.router.navigate(['admindash/copond']);
        },
        error => {
          console.error('Error creating coupon', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error creating coupon. Please try again.' });
        }
      );
    }
  }
}
