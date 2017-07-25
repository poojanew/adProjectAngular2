import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {postAdComponent} from './components/Advertisements/postAd.component';
import {headerComponent} from './components/header/header.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {homeComponent} from './components/Home/home.component';
import {RouterModule,Routes} from '@angular/router';


@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot([{path:' ',component:homeComponent},{path:'postAd',component:postAdComponent}])],
  declarations: [ AppComponent,postAdComponent,headerComponent,homeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
