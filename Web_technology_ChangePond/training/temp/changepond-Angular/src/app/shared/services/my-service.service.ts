import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  
  breakFast=[
    {name:"Idali",price:"30",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHjNt2UB7Ry3uB8pvDlKSaempGJIpGTWnRw&s"},
    {name:"Dosa",price:"90",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_QG6Ag8TDjkkyjidQbHEBD2_xysBm-oLvw&s"},
    {name:"Vada",price:"100",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fjdyewr-mGAdEjeMhhzk95igIlBxD1HegA&s"},
    {name:"Poha",price:"50",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWWqNl5CX0_H48F8v_KDpMAmWX4oc2Yx6xQ&s"}
   
  ];


}
