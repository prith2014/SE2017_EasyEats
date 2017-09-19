import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {UserComponent} from "../users/user";

export const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forChild(routes);
