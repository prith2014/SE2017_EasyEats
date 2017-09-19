import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from "./modules/table/table";
import {GraphComponent} from "./modules/graph/graph";
import {UserComponent} from "./modules/users/user";
import {MenuComponent} from "./modules/menu/menu";

export const routes: Routes = [
  // {
    //Login
    // path: '',
    // loadChildren: 'modules/login/login.module#AwardsModule'
    // redirectTo: 'login', pathMatch: 'full'
  // },
  // { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: GraphComponent},
    { path: 'table', component: TableComponent},
    { path: 'chart', component: GraphComponent},
    { path: 'users', component: UserComponent},
    { path: 'menu', component: MenuComponent}

];

export const routing = RouterModule.forRoot(routes, { useHash: true });
