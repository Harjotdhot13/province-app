import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinceService } from '../shared/province.service';
import { IProvince } from '../shared/province.model';
import { Subscription }  from 'rxjs/Subscription';

@Component({
  templateUrl: 'app/provinces/province-detail.component.html',
  styles: ['.heading-wrapper {margin-top: 60px; margin-bottom: 60px;}']
})

export class ProvinceDetailComponent implements OnInit {
  province: IProvince;
  errorMessage: string;
  listFilter: string;
  direction: number = -1;
  isDesc: boolean;
  column: string = 'cityPopulation';
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
                private provinceService: ProvinceService) {
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(
        params => {
            let provinceCode = params['provinceCode'];
            this.getProvince(provinceCode);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProvince(provinceCode: string) {
    this.provinceService.getProvince(provinceCode).subscribe(
      province => this.province = province,
      error => this.errorMessage = <any>error);

  }

  onBack(): void {
    this.router.navigate(['/provinces']);
  }

  sort(property: string) {
    this.isDesc = !this.isDesc; // change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}