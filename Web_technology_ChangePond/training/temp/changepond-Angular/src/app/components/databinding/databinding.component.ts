import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  
  myName:string = "Panchashil Wankhede";
  num1:number=100;
  num2:number=200;
 
  mydata:any;
  
  imgPath:string="https://t3.ftcdn.net/jpg/07/67/90/22/240_F_767902207_P6C8SjGsTsyKxSFgJCy2uIX4E7lsMFnP.jpg";
  imgName:string="Samosa";

  greeting(){
    window.alert("Good Mornning Friends");
  }

}
