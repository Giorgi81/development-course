import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {CarrerComponent} from "./carrer/carrer.component";

export const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
  {path : 'about', component: AboutComponent},
  {path : 'services', loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)},
  {path : 'carrer', component: CarrerComponent},
  {path : '**', component: HomeComponent}
];
