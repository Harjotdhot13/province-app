import {  PipeTransform, Pipe } from '@angular/core';
import { IProvince, ICity } from "../../shared/province.model";


@Pipe({
    name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

    transform(value: ICity[], filterBy: string): ICity[] {
      filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

      return filterBy ? value.filter((city: ICity) =>
        city.cityName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
