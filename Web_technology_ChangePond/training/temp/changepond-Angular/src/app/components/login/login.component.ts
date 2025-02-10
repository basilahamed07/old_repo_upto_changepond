import { Component } from '@angular/core';
import { DatabaseServiceService } from '../../shared/services/database-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  uid:any;
  upass:any;
  userData:any=[];
constructor(private dbServ:DatabaseServiceService,private routerObj:Router){}

  singIng(){
    // console.log(this.uid,this.upass);
    this.dbServ.getRecord("users").subscribe((res:any)=>{
      // console.log(res);
         this.userData = res;
          let data = this.userData.filter((val:any)=>{return val.uname===this.uid && val.upass ===this.upass});
          if(data.length > 0){
             sessionStorage.setItem("user",this.uid);
            this.routerObj.navigate(['maindashboard']);
          }else{
            window.alert("Wrong Crendetial inserted");
            this.uid = "";
            this.upass = "";
          }
    })
  }

}
