import { Component } from '@angular/core';

@Component({
  selector: 'app-direvtive',
  templateUrl: './direvtive.component.html',
  styleUrl: './direvtive.component.css'
})
export class DirevtiveComponent {
  
  isCond1:boolean=true;
  isCond2:boolean=false;
   
 bikes:string[]=["BMW","HeroHonda","Yamaha","JavaBike","Bajaj"];
  
 mybike:string = "JavaBike";
}
