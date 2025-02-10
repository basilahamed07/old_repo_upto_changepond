import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']  
})
export class VerifyOtpComponent {

  otp: string = '';
  recipientEmail: string | null = '';  

  private apiUrl = 'http://localhost:8000/api/email';  

  constructor(private http: HttpClient, private router: Router) {
    
    this.recipientEmail = sessionStorage.getItem('recipientEmail');
  }
  verifyOtp() {
    this.http.post(`${this.apiUrl}/verify-otp`, { otp: this.otp, recipientEmail: this.recipientEmail })
      .subscribe(response => {
        console.log('OTP verified successfully:', response);
        this.router.navigate(['/set-password']);
      }, error => {
        console.error('Error verifying OTP:', error);
      });
  }
}
