import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {

  students:any;

  ngOnInit(){
    this.students = new FormGroup(
      {
      fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      password:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z!@#$%^&*()_+0-9  ]{8,16}$")]),
      email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9.@]{8,}$")])
    })


  }

  getData(){
    console.log(this.students.value);
  }
  }

