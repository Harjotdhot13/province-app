import { Routes } from '@angular/router'
import { ProvinceListComponent } from './provinces/province-list.component';
import { ProvinceDetailComponent } from './provinces/province-detail.component';
import { Error404Component } from './provinces/errors/404.component';
import { ProvinceDetailActivator } from './provinces/province-detail-activator.service';
import { ProvinceListResolver } from './provinces/province-list-resolver';

export const appRoutes: Routes = [
  { path: 'provinces', component: ProvinceListComponent, resolve:{provinces: ProvinceListResolver}},
  { path: 'province/:provinceCode', canActivate: [ProvinceDetailActivator],  component: ProvinceDetailComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/provinces', pathMatch: 'full' },
  { path: '**', component: Error404Component }
]