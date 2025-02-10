import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagglesimageComponent } from './busnesslogics/tagglesimage/tagglesimage.component';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './pipingcontent/gender.pipe';
import { ClickcontentComponent } from './busnesslogics/clickcontent/clickcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    TagglesimageComponent,
    GenderPipe,
    ClickcontentComponent
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
