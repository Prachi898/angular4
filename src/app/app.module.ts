import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormDemoComponent } from './login';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,FormDemoComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,FormDemoComponent]
})
export class AppModule { }
