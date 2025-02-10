import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = ''; 
  recipientEmail: string | null = '';

  private apiUrl = 'http://localhost:8000/api/users/update_password';  

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.recipientEmail = sessionStorage.getItem('recipientEmail');
    if (!this.recipientEmail) {
      this.router.navigate(['/']);
    }
  }

  setNewPassword() {
    if (this.newPassword && this.confirmPassword) {
      if (this.newPassword !== this.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      this.http.post(this.apiUrl, { 
        email: this.recipientEmail, 
        new_password: this.newPassword, 
        confirm_password: this.confirmPassword 
      })
      .subscribe(response => {
        console.log('Password updated successfully:', response);
        this.router.navigate(['/login']);
      }, error => {
        console.error('Error updating password:', error);
      });
    } else {
      console.error('Both password fields are required');
    }
  }
}
