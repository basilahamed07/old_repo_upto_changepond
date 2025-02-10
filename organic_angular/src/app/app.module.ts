import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutPageComponent } from './content/about-page/about-page.component';
import { AdminPageComponent } from './admin_panal/admin-page/admin-page.component';
import { HttpserviceService } from '../httpservice.service';
// import { UseraddComponent } from './admin_panal/useradd/useradd.component';
import { OrderDetailsComponent } from './admin_panal/order-details/order-details.component';
import { CategoriesComponent } from './admin_panal/categories/categories.component';
import { CoupondComponent } from './admin_panal/coupond/coupond.component';
import { ShippingComponent } from './admin_panal/shipping/shipping.component';
import { FeedbackComponent } from './admin_panal/feedback/feedback.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginandregistrationComponent } from './components/loginandregistration/loginandregistration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AdmindashbordComponent } from './newadmin/admindashbord/admindashbord.component';
import { CorosalGsapComponent } from './components/corosal-gsap/corosal-gsap.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { AdminRoutingComponent } from './admin-routing/admin-routing.component';
// import { MainAdminPageComponent } from './main-admin-page/main-admin-page.component';
// import { LandingpageComponent } from './components/landingpage/landingpage.component';

import { UseraddComponent } from './newadmin/useradd/useradd.component';
import { ProdactAddComponent } from './newadmin/prodact-add/prodact-add.component';
import { UserUpdateComponent } from './newadmin/user-update/user-update.component';
import { ProdactUpdateComponent } from './newadmin/prodact-update/prodact-update.component';
import { ProdactpatchComponent } from './newadmin/prodactpatch/prodactpatch.component';

@NgModule({
  declarations: [
    AppComponent,

    AboutPageComponent,
    AdminPageComponent,
    UseraddComponent,
    OrderDetailsComponent,
    CategoriesComponent,
    CoupondComponent,
    ShippingComponent,
    FeedbackComponent,
    LoginandregistrationComponent,
    PagenotfoundComponent,
    LandingpageComponent,
    AdmindashbordComponent,
    CorosalGsapComponent,
    TestcomponentComponent,
    AdminRoutingComponent,
    ProdactAddComponent,
    UserUpdateComponent,
    ProdactUpdateComponent,
    ProdactpatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
