import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './componants/pagenotfound/pagenotfound.component';
import { MainDashboardComponent } from './componants/main-dashboard/main-dashboard.component';
import { RtfComponent } from './componants/rtf/rtf.component';
import { AngFormComponent } from './componants/ang-form/ang-form.component';
import { UtfComponent } from './componants/utf/utf.component';
import { TablesComponent } from './componants/tables/tables.component';
import { CarBikeComponent } from './car-bike/car-bike.component';
import { BreakfastComponent } from './componants/breakfast/breakfast.component';
import { ProdactDashbordComponent } from './CRUD/prodact-dashbord/prodact-dashbord.component';

const routes: Routes = [

  //default routing
  // {path:"", component:MainDashboardComponent},
  
  // //redirecting routuing
  // {path:"",redirectTo:"utf",pathMatch:"full"},
  
  //naming routing
  // {path:"rtf",component:RtfComponent},

  
  //parametrize routing
  // {path:"angularform/:id",component:AngFormComponent},
  // {path:"angularform",component:AngFormComponent},

  //child routing
  {path:"",component:MainDashboardComponent, children:[
      {path:"rtf",component:RtfComponent},
      {path:"angularform",component:AngFormComponent},
      {path:"carbike",component:CarBikeComponent},
      {path:"uts",component:UtfComponent},
      {path:"deatils",component:TablesComponent},
      {path:"breakfast",component:BreakfastComponent},
      {path:"persondata",component:ProdactDashbordComponent}
  ]},
  
  //windcard routing
  {path:"**",component:PagenotfoundComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
