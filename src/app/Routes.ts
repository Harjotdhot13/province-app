import { Routes } from '@angular/router'
import { ProvinceListComponent } from "./provinces/province-list.component";
import { ProvinceDetailComponent } from "./provinces/province-detail.component";
import { Error404Component } from "./provinces/errors/404.component";
import { ProvinceDetailActivator } from "./provinces/province-detail-activator.service";

export const appRoutes: Routes = [
  { path:'provinces', component: ProvinceListComponent },
  { path:'province/:provinceCode', canActivate: [ProvinceDetailActivator],  component: ProvinceDetailComponent },
  { path:'404', component: Error404Component },
  { path: '', redirectTo: '/provinces', pathMatch: 'full' }
]