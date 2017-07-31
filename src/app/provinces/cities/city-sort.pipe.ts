import {  PipeTransform, Pipe } from '@angular/core'
import { ICity } from "../../shared/province.model";


@Pipe({
  name: 'citySort'
})

export class CitySortPipe implements PipeTransform {
  transform(value: ICity[], args?: any): any {
    if(value != undefined) {
      return value.sort(function(a, b) {
        if(a[args.property] < b[args.property]) {
          return -1 * args.direction
        }
        else if( a[args.property] > b[args.property]){
          return 1 * args.direction;
        }
        else{
          return 0;
        }
      })
    }
  }
}