import { Routes } from '@angular/router';
import {HomeComponent} from "./navigation/home/home.component";
import {AboutComponent} from "./navigation/about/about.component";
import {CarrerComponent} from "./navigation/carrer/carrer.component";
import {HomeResolver} from "./service/home-resolver.resolver";
import {ServiceResolver} from "./service/service-resolver.resolver";
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";



export const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./navigation/home/home.component').then(m => m.HomeComponent),
    resolve: { homeCourse: HomeResolver },

  },


{path : 'about', component: AboutComponent},
  {path : 'services', loadComponent: () => import('./navigation/services/services.component').then(m => m.ServicesComponent),
    resolve: { serviceCourse: ServiceResolver  },

  },
  {path : 'carrer', component: CarrerComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},

  {path : '**', redirectTo: '/home'}
];
