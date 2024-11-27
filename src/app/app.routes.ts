import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CarrerComponent} from "./carrer/carrer.component";
import {HomeResolver} from "./service/home-resolver.resolver";
import {ServiceResolver} from "./service/service-resolver.resolver";



export const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    resolve: { homeCourse: HomeResolver },

  },


{path : 'about', component: AboutComponent},
  {path : 'services', loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent),
    resolve: { serviceCourse: ServiceResolver  },

  },
  {path : 'carrer', component: CarrerComponent},
  {path : '**', redirectTo: '/home'}
];
