import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {
   
  userForm:any;

  ngOnInit(){
    this.userForm = new FormGroup({
      fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      upass:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
      uemail:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$")]),
      term:new FormControl("",Validators.requiredTrue)
    })
  }
  getData(){
    console.log(this.userForm.value);
  }

}
