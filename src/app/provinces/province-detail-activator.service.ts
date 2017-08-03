import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProvinceService } from '../shared/province.service';

@Injectable()
export class ProvinceDetailActivator implements CanActivate {
  constructor(private provinceService: ProvinceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    this.provinceService.getProvince(route.params['provinceCode']).subscribe(provinceExists => {
      if (!provinceExists) {
        this.router.navigate(['/404']);
      }
    });
    return true;
  }
}