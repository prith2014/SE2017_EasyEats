import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {routing} from "./routes";
import {HttpModule} from "@angular/http";
import {HomeModule} from "./modules/home/home.module";
import {NgSemanticModule} from "ng-semantic";
import {LoginModule} from "./modules/login/login.module";

@NgModule({
  imports:      [ BrowserModule, HttpModule, HomeModule, routing, NgSemanticModule, LoginModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
