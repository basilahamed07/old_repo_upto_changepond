import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericApiService } from '../../../services/apiservice/axiosservices.service'; 
import { MessageService } from 'primeng/api'; 
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css'],
  providers: [MessageService] 
})
export class UseraddComponent implements OnInit {

  userForm: any;
  access: string | null = sessionStorage.getItem("access");

  constructor(
    private apiService: GenericApiService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private messageService: MessageService 
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      first_name: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      last_name: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      city: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      state: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
      confirm_password: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$")]),
      phone_number: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{10}$")]),
      first_line: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9 ]{3,20}$")]),
      pincode: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{6}$")]),
    }, { validators: this.passwordMatchValidator() });
    this.cd.detectChanges(); 
  }

  
  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
      const password = formGroup.get('password');
      const confirmPassword = formGroup.get('confirm_password');
  
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        return { 'passwordMismatch': true };
      }
      return null;
    };
  }
  
  getData() {
    if (this.userForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Form is invalid. Please correct the errors and try again.' });
      return;
    }

    const formData = new FormData();
    Object.keys(this.userForm.value).forEach(key => {
      formData.append(key, this.userForm.value[key]);
    });

    this.apiService.post('users/register', formData)
      .subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User registered successfully!' });
          this.router.navigate(['/admindash/userlist']); 
        },
        error => {
          console.error('Error registering user', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error registering user. Please try again.' });
        }
      );
  }
}
