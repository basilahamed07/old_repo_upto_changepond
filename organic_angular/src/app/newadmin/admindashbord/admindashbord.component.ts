import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AxiosService } from '../../service_axios/axios.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { error } from 'console';

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrl: './admindashbord.component.css'
})
export class AdmindashbordComponent implements OnInit {
  



  
  exampleForm!: FormGroup;
  // ------ store the whole data ------
  data:any[] = [];
  user:any[] = [];
  catagorys:any[] = [];
  shipping:any[] = [];
  order:any[]= []
  coupon:any[]= []


//stire the number of the data
  usercount:number = 0
  catusercount:number = 0
  shtppingcount:number = 0
  ordercount:number = 0



  // get the data from the forms
  userObj={
    category_name:""
  } 

  file: File | null = null; // Define the file property
  
  constructor( private apiservice:AxiosService, private _router:Router ){
    
    // for input forms
  }
  










  ngOnInit(): void {
    this.prodactdeatch();
    this.userdetails();
    this.catagory();
    this.shippingdata();
    this.orderretrive();
    this.coupondata();
  }
  
  // console.log(usercount)
















  //getting the prodact table
  prodactdeatch(): void {
    this.apiservice.getData('Product_Table/') // Replace 'data-endpoint' with your actual endpoint
      .then(data => {
        this.data = data;
        // this.usercount = data.length;
        console.log('Data fetched:', this.data);
        // console.log('Data lenth:', this.data.length);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      

  }
  //getting the coupon table
  coupondata(): void {
    this.apiservice.getData('coupon/') // Replace 'data-endpoint' with your actual endpoint
      .then(data => {
        this.data = this.coupon;
        // this.usercount = data.length;
        console.log('Data fetched:', this.coupon);
        // console.log('Data lenth:', this.data.length);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      

  }


  // for get the user data
  userdetails(): void {
    this.apiservice.getData('users/get_user') // Replace 'data-endpoint' with your actual endpoint
      .then(data => {
        this.user = data;
        this.usercount = data.length;
        console.log('Data fetched:', this.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }



  // getting the catagory data
  catagory(): void {
    this.apiservice.getData('Category/') // Replace 'data-endpoint' with your actual endpoint
      .then(data => {
        this.catagorys = data;
        this.catusercount = data.length;
        console.log('Data fetched:', this.data);
        console.log('Data lenth:', this.data.length);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


// retrive the data from shipping
  shippingdata():void{
    this.apiservice.getData("shipping/")
    .then(data =>{
      this.shipping = data
      this.shtppingcount = data.length
    })
    .catch(error =>{
      console.log("error", error)
    })
  }


// retrive the data from order

  orderretrive():void{
    this.apiservice.getData("orders/").then(data =>{
      this.order = data
      this,this.ordercount = data.length
    })
  }




  // deleting prodact table


  deleteDataprodact(id:any){
    if(window.confirm(`are you sure to delete record with id ${id}`)){
      this.apiservice.deletedata("Product_Table/",id).then(()=>{
        window.alert("Record deleted successfully");
        this.prodactdeatch();
      })
    }    


// ------------------------------------------------------------------------------
  // / sending the data to the datatbase workking


// sending data to user
  // useradd(form: any) {
  //   const formData = new FormData();
  //   formData.append('first_name', form.value.first_name);
  //   formData.append('last_name', form.value.last_name);
  //   formData.append('email', form.value.email);
  //   formData.append('Category_Name', form.value.Category_Name);
  //   formData.append('password', form.value.password);
  //   formData.append('confirm_password', form.value.confirm_password);
  //   formData.append('phone_number', form.value.phone_number);
  //   formData.append('first_line', form.value.first_line);
  //   formData.append('city', form.value.city );
  //   formData.append('state', form.value.state);
  //   formData.append('pincode', form.value.pincode);
  //   console.log(formData)
  //   this.apiservice.postData("users/register", formData)
  //     .then(response => {
  //       console.log('Data sent successfully', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error sending data', error);
  //     });
  // }
}







// --------------------------------------------------------------------------





  //post the data
  //post by using the httpclient


  // onsubmit() {
  //   {
  //     try {
  //       this.apiservice.postData('Category/',this.userObj)
  //       .then(res=>{
  //         console.log("catagory aded", res.data)
  //       })
        
  //     } catch (error) {
  //       console.error('Error adding item', error);
  //     }
  //   }
  // }




  // by using sir code 

//   onLogin(){
//     // console.log(this.userObj.userid,this.userObj.userpas);
//     this.apiservice.postData("Category/",this.userObj)
//       // this._router.navigateByUrl("/dashboard")
//   }


}
