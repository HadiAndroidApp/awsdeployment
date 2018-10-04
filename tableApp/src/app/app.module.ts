import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports:[
     NgbModule.forRoot(),
 CommonModule,
NgtUniversalModule,
 
    
    FormsModule
  ],
  providers: [],
})
export class AppModule { }
