import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosService } from '../../service_axios/axios.service';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {

  id: any;
  oldData: any;
  userForm: any;

  constructor( private actRouteObj: ActivatedRoute, private apiservice: AxiosService, private routerObj: Router){
   
  }





  ngOnInit(): void {
    this.actRouteObj.paramMap.subscribe((para) => {
      this.id = para.get('id');
      console.log(this.id);
      if (this.id) {
        this.apiservice.getsingledta('product', this.id)
          .then(response => {
            console.log(response.data);
            this.oldData = { ...response  .data };
            this.userForm = new FormGroup({
              first_name:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      last_name:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      city:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      state:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
      email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$")]),
      phone_number:new FormControl("",[Validators.required,Validators.pattern("^[0-9 ]{10}$")]),
      first_line:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9 ]{3,20}$")]),
      pincode:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{6}$")]),
            });
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
    });


    
  }

  addData() {


    if (this.id) {
      this.apiservice.puts('user/', this.id, this.userForm.value)
        .then(() => {
          window.alert('Record updated Successfully');
          this.routerObj.navigate(['/admindash']);
        })
        .catch(error => {
          console.error('Error updating record:', error);
        });
    }


}
}

