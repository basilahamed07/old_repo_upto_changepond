import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginandregistration',
  templateUrl: './loginandregistration.component.html',
  styleUrls: ['./loginandregistration.component.css'] 
})
export class LoginandregistrationComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  signupUsers: { userName: string; email: string; password: string }[] = [];
  signupObj: { userName: string; email: string; password: string } = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: { username: string; password: string } = {
    username: '',
    password: ''
  };

  constructor(private accService: AuthService, private route: Router) {}

  ngOnInit(): void {
    const localData = sessionStorage.getItem('signUpUsers');
    if (localData) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  signIn(): void {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  onLogin(): void {
    this.accService.onLogin(this.loginObj).subscribe({
      next: (res: any) => {
        console.log('res', res);
        sessionStorage.setItem('access', res.access);
        this.route.navigateByUrl('/dashboard');
      },
      error: (err: any) => {
        console.error('Login error', err);
      }
    });
  }

  signUp(): void {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  onSignUp(): void {
    this.signupUsers.push(this.signupObj);
    sessionStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
}
