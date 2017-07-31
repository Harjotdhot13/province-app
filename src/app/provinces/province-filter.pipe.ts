import {  PipeTransform, Pipe } from '@angular/core';
import { IProvince } from '../shared/province.model';

@Pipe({
    name: 'provinceFilter'
})
export class ProvinceFilterPipe implements PipeTransform {

  transform(value: IProvince[], filterBy: string): IProvince[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ? value.filter((province: IProvince) =>
      province.provinceName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
