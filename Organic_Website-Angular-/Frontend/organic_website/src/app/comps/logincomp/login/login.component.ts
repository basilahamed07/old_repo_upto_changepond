import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  signupForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder 
  ) 
  
  
  {
    
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    }, { validators: this.passwordMatchValidator });

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}




  signIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }



  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirm_password')?.value
      ? null : { mismatch: true };
  }



  onSignUp(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const signupData = {
      ...this.signupForm.value,
      first_line: 'temp',
      city: 'temp',
      state: 'temp',
      pincode: 'temp',
      cart_product_ids: [],
      quantities: []
    };



    // authtoken perform
    this.http.post('http://172.17.7.104:8000/api/users/register', signupData).subscribe(
      (response: any) => {
        console.log('Signup successful:', response);
        sessionStorage.setItem('access', response.access);
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Signup failed:', error);
        alert('Signup failed: ' + error.error.message); 
      }
    );
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); 
      return;
    }

    const loginData = this.loginForm.value;

    this.http.post('http://172.17.7.104:8000/api/token/', loginData).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        sessionStorage.setItem('access', response.access);
        sessionStorage.setItem('email', loginData.username);
        
        let access = sessionStorage.getItem("access");

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${access}`
        });
        
        this.http.get('http://172.17.7.104:8000/api/users/get_user', { headers }).subscribe( 
          (response: any) => {
            console.log(response);
            sessionStorage.setItem("user_id",String(response.data.id ));
          },
          (error: any) => {
            console.error('Error when getting the user id', error);
          }
          );

        if (loginData.username=="admin@gmail.com"){
          console.log(loginData.username);
          this.router.navigate(['/admindash']);
        
        }
        else{
          this.router.navigate(['/home']);
        }
        
      },
      (error: any) => {
        console.error('Login failed:', error);
        alert('Login failed: ' + error.error.message);
      }
    );
  }
}
