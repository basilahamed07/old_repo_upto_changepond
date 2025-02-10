import { Component } from '@angular/core';
import { FoodservicesService } from '../../shared/services/foodservices.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'


  //services in classs
})
export class BreakfastComponent {

    item:any;
    constructor(private myserviceOBJ:FoodservicesService){

    }

    ngOnInit(){
      this.item = this.myserviceOBJ.breakfastlist
    }
}
