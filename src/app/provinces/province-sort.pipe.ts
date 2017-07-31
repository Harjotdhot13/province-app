import {  PipeTransform, Pipe } from '@angular/core';
import { IProvince } from '../shared/province.model';

@Pipe({
  name: 'provinceSort'
})

export class ProvinceSortPipe implements PipeTransform {
  transform(value: IProvince[], args?: any): any {
    if (value !== undefined) {
      return value.sort(function(a, b) {
        if (a[args.property] < b[args.property]) {
          return -1 * args.direction;
        }
        else if ( a[args.property] > b[args.property]) {
          return 1 * args.direction;
        }
        else {
          return 0;
        }
      })
    }
  }
}