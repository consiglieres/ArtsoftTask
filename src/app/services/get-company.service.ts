import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../interfaces/company.interface';

@Injectable()
export class GetCompanyService {
  // Observable переманная для получения данных
  protected companyObservable?: Observable<ICompany[]>
  // Переменная для записи Observable в массив для последующей манипуляции
  protected objects: ICompany[] = []

  // Импортирование модуля httpClient для обрщения к серверу
  constructor(private _httpClient: HttpClient){};

  // Получение данных
  public getCompany(): ICompany[]{
    this.companyObservable = this._httpClient.get<ICompany[]>('https://random-data-api.com/api/company/random_company?size=20');

    this.companyObservable.subscribe(value => {
      this.objects = value
    })
    return this.objects
  };
};
