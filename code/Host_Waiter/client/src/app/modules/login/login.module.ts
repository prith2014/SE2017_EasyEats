import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import {routing} from "./login.route";
import {LoginComponent} from "./login";


@NgModule({
    imports: [
        CommonModule,
        routing,
        SharedModule.forRoot(),
    ],
    declarations: [
        LoginComponent
    ],
    bootstrap: [
        LoginComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class LoginModule { }
