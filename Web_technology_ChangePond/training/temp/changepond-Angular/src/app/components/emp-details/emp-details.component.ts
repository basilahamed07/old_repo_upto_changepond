import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {
 
  emp:any =[
    {id:101,name:"Ajit",salary:95000,post:"Manager",address:"Chennai"},
    {id:102,name:"Vijay",salary:95000,post:"Manager",address:"Nagpur"},
    {id:103,name:"Suresh",salary:95000,post:"Manager",address:"Mumbai"},
    {id:104,name:"Danish",salary:95000,post:"Manager",address:"Hydrabad"},
    {id:105,name:"Raja",salary:95000,post:"Manager",address:"Banglore"},
    {id:106,name:"Bala",salary:95000,post:"Manager",address:"Pune"}
  ]
}
