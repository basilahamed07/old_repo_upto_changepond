import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AxiosService } from '../../service_axios/axios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prodact-add',
  templateUrl: './prodact-add.component.html',
  styleUrl: './prodact-add.component.css'
})
export class ProdactAddComponent {

userForm:any;

constructor(private apiservice:AxiosService,private route:Router  ){}

file: File | null = null;

// for user validation

ngOnInit(){
  this.userForm = new FormGroup({
    // fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
    P_Name:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
    P_description:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9 ]{10,100}$")]),
    P_Price:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{2,4}$")]),
    P_Stock:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{2,4}$")]),
    P_Brand:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
    P_Category_id:new FormControl("",[Validators.required,Validators.pattern("^[1-4]{1}$")]),
    P_image:new FormControl("",[Validators.required]),
    // term:new FormControl("",Validators.requiredTrue),
  })
}


// Correctly type the passwordMatchValidator as ValidatorFn


getData(form:any){
  
  if(this.userForm.invalid){
    window.alert("form is invalid");
  }

  else{
    const formData = new FormData();
  formData.append('P_Name', form.value.P_Name);
  formData.append('P_description', form.value.P_description);
  formData.append('P_Price', form.value.P_Price);
  formData.append('P_Stock', form.value.P_Stock);
  formData.append('P_Brand', form.value.P_Brand);
  formData.append('P_Category_id', form.value.P_Category_id);
  formData.append('P_image', this.file as File);
  this.apiservice.postData("Product_Table/", formData)
  .then(response => {
    console.log('Data sent successfully', response.data);
    this.route.navigate(['/admindash']);
  })
  .catch(error => {
    console.error('Error sending data', error);
  });
  }

}


onFileChange(event: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.file = file; // Store the file for later use
  }
}




}
