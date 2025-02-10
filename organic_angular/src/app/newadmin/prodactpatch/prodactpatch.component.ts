import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AxiosService } from '../../service_axios/axios.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prodactpatch',
  templateUrl: './prodactpatch.component.html',
  styleUrls: ['./prodactpatch.component.css']
})
export class ProdactpatchComponent implements OnInit {
  userForm:any;
  prodact: any = {};
  prodactid: any;
  file: File | null = null;
  constructor(private router: ActivatedRoute, private apiservice: AxiosService , private route:Router) {}

  ngOnInit(): void {
    this.prodactid = this.router.snapshot.paramMap.get("id");
    this.apiservice.getsingledta("Product_Table/", this.prodactid).then((res: any) => {
      this.prodact = {
        id: res.id,
        P_Name: res.P_Name,
        P_description: res.P_description,
        P_Price: res.P_Price,
        P_Stock: res.P_Stock,
        P_Category_id: res.P_Category_id,
        P_Brand: res.P_Brand,
        P_image: res.P_image
      };
    });

    this.userForm = new FormGroup({
      // fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      P_Name:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      P_description:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9 ]{10,100}$")]),
      P_Price:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{2,4}$")]),
      P_Stock:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{2,4}$")]),
      P_Brand:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      P_Category_id:new FormControl("",[Validators.required,Validators.pattern("^[1-4]{1}$")]),
      P_image:new FormControl("",[Validators.required])
    })
  }

  

  addData() {
    const formData = new FormData();
  formData.append('P_Name', this.prodact.P_Name);
  formData.append('P_description', this.prodact.P_description);
  formData.append('P_Price', this.prodact.P_Price);
  formData.append('P_Stock', this.prodact.P_Stock);
  formData.append('P_Brand', this.prodact.P_Brand);
  formData.append('P_Category_id', this.prodact.P_Category_id);
  if (this.file) {
    formData.append('P_image', this.file, this.file.name); // Append the file with its name
  }
    this.apiservice.puts("Product_Table/",`${this.prodactid}/`,formData).then(res=>{
      window.alert("data update")
      console.log(res)
      this.route.navigate(['/admindash']);
    }).catch(error=>{
      console.log(error)
    })
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file; // Store the file for later use
    }
  }
}
