import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProdactmodelsModule {
 
  
  
  }

  export interface Product {
    id: number;
    P_Name: string;
    P_description: string;
    P_Price: number;
    P_Stock: number;
    P_Category_id: number;
    P_Brand: string;
    P_image: string;
  }
