import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../shared/province.service'
import { IProvince } from "../shared/province.model";

@Component({
  templateUrl: 'app/provinces/province-list.component.html',
  styleUrls: ['app/provinces/province-list.component.css']
})

export class ProvinceListComponent implements OnInit {
  provinces: IProvince[];
  errorMessage: string;
  listFilter: string;
  direction: number = -1;
  isDesc: boolean;
  column: string = "provincePopulation";


  constructor(private provinceService: ProvinceService) {
  }

  ngOnInit() {
    this.provinceService.getProvinces()
      .subscribe(provinces => this.provinces = provinces,
                  error => this.errorMessage = <any>error);

  }

  sort(property: string) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}
