import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProvinceListComponent } from './provinces/province-list.component';
import { ProvinceService } from './shared/province.service';
import { appRoutes } from './Routes';
import { ProvinceDetailComponent } from "./provinces/province-detail.component";
import { Error404Component } from "./provinces/errors/404.component";
import { ProvinceDetailActivator } from "./provinces/province-detail-activator.service";
import { ProvinceFilterPipe } from "./provinces/province-filter.pipe";
import { ProvinceSortPipe } from "./provinces/province-sort.pipe";
import { ProvinceListResolver } from "./provinces/province-list-resolver";
import { CityFilterPipe } from "./provinces/cities/city-filter.pipe";
import { CitySortPipe } from "./provinces/cities/city-sort.pipe";

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  declarations: [
     AppComponent,
     ProvinceListComponent,
     ProvinceDetailComponent,
     Error404Component,
     ProvinceFilterPipe,
     ProvinceSortPipe,
     CityFilterPipe,
     CitySortPipe
  ],
  providers: [
    ProvinceService,
    ProvinceDetailActivator,
    ProvinceListResolver
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
