import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// admin coponents  
import { CategoriesComponent } from './admin_panal/categories/categories.component';
import { CoupondComponent } from './admin_panal/coupond/coupond.component';
import { FeedbackComponent } from './admin_panal/feedback/feedback.component';
import { OrderDetailsComponent } from './admin_panal/order-details/order-details.component';
import { ShippingComponent } from './admin_panal/shipping/shipping.component';
// import { UseraddComponent } from './admin_panal/useradd/useradd.component';
import { UseraddComponent } from './newadmin/useradd/useradd.component';
import { LoginandregistrationComponent } from './components/loginandregistration/loginandregistration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AdminPageComponent } from './admin_panal/admin-page/admin-page.component';
import { AdmindashbordComponent } from './newadmin/admindashbord/admindashbord.component';
import { AdminRoutingComponent } from './admin-routing/admin-routing.component';
import { ProdactAddComponent } from './newadmin/prodact-add/prodact-add.component';
import { CorosalGsapComponent } from './components/corosal-gsap/corosal-gsap.component';
import { ProdactpatchComponent } from './newadmin/prodactpatch/prodactpatch.component';
// import { MainAdminPageComponent } from './main-admin-page/main-admin-page.component';



const routes: Routes = [

  // {
  //   path: 'dashboard', component: AdminDashboardComponent, children: [
  //     { path: 'users', component: UsersComponent },
  //     { path: 'edituser/:id', component: EdituserComponent },
  //     {path:'rooms',component:RoomListComponent},
  //     { path: 'rooms/add', component: AddRoomComponent },
  //     {path:'roomcard',component:RoomCardComponent},
  //     { path: 'feedback', component: FeedbackComponent },
  //     { path: '', redirectTo: 'users', pathMatch: 'full' }
  //   ]
  // }, 
  
  // { path: '', component: LoginandregistrationComponent },
  { path: 'caosel', component: CorosalGsapComponent },
  { path: 'login', component: LoginandregistrationComponent },
  { path: 'dashboard', component: LandingpageComponent },
 
  {
   path:"admindash", component: AdminRoutingComponent, children:[
    {path:"", component:AdmindashbordComponent},
    {path:"useradd", component:UseraddComponent},
    {path:"prodactadd", component:ProdactAddComponent},
    {path:":id/editeprodact", component:ProdactpatchComponent},
    {path:"categories", component:CategoriesComponent},
    {path:"coupond", component:CoupondComponent},
    {path:"feedback", component:FeedbackComponent},
    {path:"order_details", component:OrderDetailsComponent},
    {path:"shipping", component:ShippingComponent}
    ]
  },

    { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
