  import { Component,Injectable,OnInit  } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { AxiosService } from '../../service_axios/axios.service';
  import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';


  @Component({
    selector: 'app-prodact-update',
    templateUrl: './prodact-update.component.html',
    styleUrl: './prodact-update.component.css'
  })

  export class ProdactUpdateComponent implements OnInit {

    prodact!:any
    prodactid!:any

    constructor(private router:ActivatedRoute){
      this.prodactid = this.router.snapshot.paramMap.get("id");
      alert(this.prodactid)
    }
  
    ngOnInit(): void {
      this.prodactid = this.router.snapshot.paramMap.get("id");
      alert(this.prodactid)
    }
  
    addData(){

    }
  
  }