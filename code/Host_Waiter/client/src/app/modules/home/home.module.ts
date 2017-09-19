import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";
import { SharedModule } from "../shared/shared.module";
import {UserComponent} from "../users/user";
import {MenuComponent} from "../menu/menu";
import {GraphComponent} from "../graph/graph";
import {TableComponent} from "../table/table";

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    MenuComponent,
    GraphComponent,
    TableComponent
  ],
  bootstrap: [
    HomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
