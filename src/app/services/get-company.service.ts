import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../interfaces/company.interface';

@Injectable()
export class GetCompanyService {

  constructor(private _httpClient: HttpClient){};

  public getCompany(): Observable<ICompany[]>{
    return this._httpClient.get<ICompany[]>('https://random-data-api.com/api/company/random_company?size=20');
  };
};
