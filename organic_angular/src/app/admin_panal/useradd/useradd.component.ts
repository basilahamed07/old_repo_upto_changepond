import { Component } from '@angular/core';
import { AxiosService } from '../../service_axios/axios.service';
// import { Component } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';


import { matchPasswordsValidator } from './validator';



@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrl: './useradd.component.css'
})
export class UseraddComponent {
  
  
  userdataForm: FormGroup;


constructor(private apiservice:AxiosService,private fb: FormBuilder){
  this.userdataForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm_password: ['', [Validators.required, Validators.minLength(6)]],
    phone_number: ['', [Validators.pattern('[0-9]{10}')]],
    first_line: [''],
    city: [''],
    state: [''],
    pincode: ['', [Validators.pattern('[0-9]{6}')]],
  }, { validators: matchPasswordsValidator() });

}





useradd1(form:any) {
  if (this.userdataForm.valid) {
    const formData = new FormData();
    formData.append('first_name', form.value.first_name);
    formData.append('last_name', form.value.last_name);
    formData.append('email', form.value.email);
    formData.append('Category_Name', form.value.Category_Name);
    formData.append('password', form.value.password);
    formData.append('confirm_password', form.value.confirm_password);
    formData.append('phone_number', form.value.phone_number);
    formData.append('first_line', form.value.first_line);
    formData.append('city', form.value.city );
    formData.append('state', form.value.state);
    formData.append('pincode', form.value.pincode);
    
    
    this.postdata(formData)
    console.log('Form Data:', this.userdataForm);
    // Handle form submission logic here (e.g., send to backend)
  } else {
    console.log('Form Data:', this.userdataForm);
    console.log('Form is invalid');
  }
}












  // sending data to user
  
  postdata(formdata: any) {
    // const formData = new FormData();
    // formData.append('first_name', form.value.first_name);
    // formData.append('last_name', form.value.last_name);
    // formData.append('email', form.value.email);
    // formData.append('Category_Name', form.value.Category_Name);
    // formData.append('password', form.value.password);
    // formData.append('confirm_password', form.value.confirm_password);
    // formData.append('phone_number', form.value.phone_number);
    // formData.append('first_line', form.value.first_line);
    // formData.append('city', form.value.city );
    // formData.append('state', form.value.state);
    // formData.append('pincode', form.value.pincode);
    // console.log(formData)
    
    this.apiservice.postData("users/register", formdata)
      .then(response => {
        console.log('Data sent successfully', response.data);
      })
      .catch(error => {
        console.error('Error sending data', error);
      });
  }




}
