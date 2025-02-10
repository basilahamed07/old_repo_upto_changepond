import { Component } from '@angular/core';
import { DatabaseserviceService } from '../../shared/services/databaseservice.service';

@Component({
  selector: 'app-prodact-dashbord',
  templateUrl: './prodact-dashbord.component.html',
  styleUrl: './prodact-dashbord.component.css'
})
export class ProdactDashbordComponent {
  myproducts:any;
  constructor(private datas:DatabaseserviceService){}
    ngOnInit(){
      this.datas.getRecord("product").subscribe((res)=>{
        this.myproducts = res;

      })
    }
  
}
