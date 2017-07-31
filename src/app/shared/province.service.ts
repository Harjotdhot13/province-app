import { Injectable } from '@angular/core';
import { IProvince} from './province.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()

export class ProvinceService {
  private provincesJsonUrl = './app/common/provinces.json';

  constructor(private http: Http) {}

  getProvinces(): Observable<IProvince[]> {
    return this.http.get(this.provincesJsonUrl).map((response: Response) => <IProvince[]>response.json()['provinces'])
    .catch(this.handleError);
  }

  getProvince(provinceCode: string): Observable<IProvince> {
    return this.getProvinces()
      .map((provinces: IProvince[]) => provinces.find(p => p.provinceCode.indexOf(provinceCode) !== -1));
  }

  handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}