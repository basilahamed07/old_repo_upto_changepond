import { Component } from '@angular/core';
import { MyServiceService } from '../../shared/services/my-service.service';

@Component({
  selector: 'app-break-fast',
  templateUrl: './break-fast.component.html',
  styleUrl: './break-fast.component.css'
})
export class BreakFastComponent {
   
  items:any;

  constructor(private myserObj:MyServiceService){}
  
  ngOnInit(){
    this.items =  this.myserObj.breakFast;
  }
}
