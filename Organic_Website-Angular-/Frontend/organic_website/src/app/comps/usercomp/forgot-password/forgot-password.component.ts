import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  recipientEmail: string = '';

  private apiUrl = 'http://localhost:8000/api/email'; 

  constructor(private http: HttpClient, private router: Router) {}

  sendOtp() {
    
    sessionStorage.setItem('recipientEmail', this.recipientEmail);

    this.http.post(`${this.apiUrl}/forgot-password`, { recipientEmail: this.recipientEmail })
      .subscribe(response => {
        console.log('OTP sent successfully:', response);
        this.router.navigate(['/verify']);
      }, error => {
        console.error('Error sending OTP:', error);
      });
  }
}
