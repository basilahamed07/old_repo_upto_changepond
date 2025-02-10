import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirevtiveComponent } from './components/direvtive/direvtive.component';
import {FormsModule} from '@angular/forms';
import { MypipeComponent } from './components/mypipe/mypipe.component';
import { CubePipe } from './shared/customepipe/cube.pipe';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirevtiveComponent,
    MypipeComponent,
    CubePipe,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
