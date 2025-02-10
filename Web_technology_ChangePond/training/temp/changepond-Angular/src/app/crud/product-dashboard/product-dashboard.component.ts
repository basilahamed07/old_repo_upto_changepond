import { Component } from '@angular/core';
import { DatabaseServiceService } from '../../shared/services/database-service.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css'
})
export class ProductDashboardComponent {
     
  myproducts:any;
  constructor(private dbserv:DatabaseServiceService){}

  ngOnInit(){
     this.fetchData();
  }

  fetchData(){
    this.dbserv.getRecord("product").subscribe((res)=>{
      this.myproducts = res;
      console.log(res);
     })
  }

  deleteData(id:any){
        if(window.confirm(`are you sure to delete record with id ${id}`)){
          this.dbserv.deleteRecord("product",id).subscribe(()=>{
            window.alert("Record deleted successfully");
            this.fetchData();
          })
        }    
  }
}
