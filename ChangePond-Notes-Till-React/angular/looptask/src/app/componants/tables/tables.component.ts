import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {  
  emp:any =[
    {id:101,name:"basil",salary:95000,post:"Manager",address:"Chennai"},
    {id:102,name:"ahamed",salary:95000,post:"Manager",address:"Nagpur"},
    {id:103,name:"basil ahamed",salary:95000,post:"Manager",address:"Mumbai"},
    {id:104,name:"ahamed basil",salary:95000,post:"Manager",address:"Hydrabad"},
    {id:105,name:"farvez",salary:95000,post:"Manager",address:"Banglore"},
    {id:106,name:"fawaz",salary:95000,post:"Manager",address:"Pune"}
  ]
}

