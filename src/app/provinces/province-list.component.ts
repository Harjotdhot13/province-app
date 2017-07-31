import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../shared/province.service';
import { IProvince } from '../shared/province.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: 'app/provinces/province-list.component.html',
  styles: [`.heading-wrapper {margin-top: 60px;margin-bottom: 60px;background: #337ab7;
    color: #fff;padding: 10px;`]
})

export class ProvinceListComponent implements OnInit {
  provinces: IProvince[];
  errorMessage: string;
  listFilter: string;
  direction: number = -1;
  isDesc: boolean;
  column: string = 'provincePopulation';


  constructor(private provinceService: ProvinceService,  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.provinces = this.route.snapshot.data['provinces']
  }

  sort(property: string) {
    this.isDesc = !this.isDesc; // change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}
