import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirevtiveComponent } from './components/direvtive/direvtive.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MypipeComponent } from './components/mypipe/mypipe.component';
import { CubePipe } from './shared/customepipe/cube.pipe';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtfComponent } from './components/utf/utf.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreakFastComponent } from './components/break-fast/break-fast.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDashboardComponent } from './crud/product-dashboard/product-dashboard.component';
import { ProductAddComponent } from './crud/product-add/product-add.component';
import { ProductUpdateComponent } from './crud/product-update/product-update.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MyangularMaterialComponent } from './components/myangular-material/myangular-material.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirevtiveComponent,
    MypipeComponent,
    CubePipe,
    EmpDetailsComponent,
    AngFormComponent,
    RtfComponent,
    UtfComponent,
    PageNotFoundComponent,
    MainDashboardComponent,
    NavComponent,
    FooterComponent,
    BreakFastComponent,
    ProductDashboardComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    MyangularMaterialComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
