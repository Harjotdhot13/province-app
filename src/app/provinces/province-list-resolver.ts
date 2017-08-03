import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProvinceService } from '../shared/province.service';

@Injectable()
export class ProvinceListResolver implements Resolve<any> {
  constructor(private provinceService: ProvinceService) {}

  resolve() {
    return this.provinceService.getProvinces().map(provinces => provinces);
  }
}