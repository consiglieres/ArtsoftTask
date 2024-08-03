import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../interfaces/company.interface';

@Injectable()
export class CompanyService {
  // Массив компаний
  public arrCompanies: ICompany[] = this.getCompany();
  public arrCompaniesEdit?: ICompany[]

  // Импортирование модуля httpClient для обрщения к серверу
  constructor(private _httpClient: HttpClient){}

  // Получение данных
  public getCompany(): ICompany[]{
    let arrCompanies: ICompany[] = []
    const companies: Observable<ICompany[]> = this._httpClient.get<ICompany[]>('https://random-data-api.com/api/company/random_company?size=20');
    companies.subscribe(value => {
      arrCompanies = value
    })
    return arrCompanies
  }

  // Фильтрация пунктов в списках
  public filterInputIndustry: string[] = [...new Set(this.arrCompanies.map(e => {return e.industry}))]
  public filterInputType: string[] = [...new Set(this.arrCompanies.map(e => {return e.type}))]

  // Cортировка
  public SortCompany(sortParameter: string): void{
    if(sortParameter === 'type'){
      this.arrCompanies = this.arrCompanies.sort((a: ICompany, b: ICompany) => a.type > b.type ? 1 : -1 )
    } else if (sortParameter === 'industry'){
      this.arrCompanies = this.arrCompanies.sort((a: ICompany, b: ICompany) => a.industry > b.industry ? 1 : -1 )
    } else if (sortParameter === 'business_name'){
      this.arrCompanies = this.arrCompanies.sort((a: ICompany, b: ICompany) => a.business_name > b.business_name ? 1 : -1 )
    }
  }

  // Фильтрация
  public FiltersCompany(searchCompany: string, inputIndustry: string, inputType: string): void{
    console.log(this.arrCompanies, searchCompany, inputIndustry, inputType)
    if(searchCompany !== ''){
      this.arrCompanies = this.arrCompanies.filter(arr => arr.business_name.includes(searchCompany))
    }
    if(inputType !== ''){
      this.arrCompanies = this.arrCompanies.filter(arr => arr.type === inputType )
    }
    if(inputIndustry !== ''){
      this.arrCompanies = this.arrCompanies.filter(arr => arr.industry === inputIndustry)
    }
    else this.arrCompanies = this.getCompany()
  }
}
// деструктуризация для filter
// track index 
