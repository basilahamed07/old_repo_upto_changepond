import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseServiceService } from '../../shared/services/database-service.service';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {
  id: any;
  oldData: any;
  prodData: any;
  constructor(private actRouteObj: ActivatedRoute, private dbServ: DatabaseServiceService, private routerObj: Router) { }

  ngOnInit() {
            
    this.actRouteObj.paramMap.subscribe((para) => {
      this.id = para.get('id');
       console.log(this.id);
      this.dbServ.getSingleRecord("product", this.id).subscribe((res) => { 
        console.log(res);
        this.oldData = {...res};
        this.prodData = new FormGroup({
          pname: new FormControl(this.oldData.pname, [Validators.required, Validators.pattern('^[a-zA-Z ]{3,20}$')]),
          price: new FormControl(this.oldData.price, [Validators.required, Validators.pattern('^[0-9]{3,20}$')]),
          company: new FormControl(this.oldData.company, [Validators.required, Validators.pattern('^[a-zA-Z ]{3,20}$')]),
        })
      })
    })


  }

  addData() {
   this.dbServ.updateRecord("product",this.id,this.prodData.value).subscribe(()=>{
    window.alert("Record updated Successfully");
    this.routerObj.navigate(['/maindashboard/productdash']);
   })
  }
}
