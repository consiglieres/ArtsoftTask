import { Injectable } from '@angular/core';
import { ICompany } from '../interfaces/company.interface';
import { GetCompanyService } from './get-company.service';
import { FilterService } from './filter.service';

@Injectable()
export class SortService {
  // Запись данных которые мы получили из фильтрации
  public companys: ICompany[] = this.getCompanyService.getCompany();

  constructor( private getCompanyService: GetCompanyService ){}

  // Функция для сортировки по параметру(sortParametr)
  public SortCompany(sortParametr: string): ICompany[]{
    if(sortParametr === 'type'){
      this.companys = this.companys.sort((a: ICompany, b: ICompany) => {
        return a.type > b.type ? 1 : -1
      })
    }
    else if(sortParametr === 'industry'){
      this.companys = this.companys.sort((a: ICompany, b: ICompany) => {
        return a.industry > b.industry ? 1 : -1
      })
    }
    else if(sortParametr === 'business_name'){
      this.companys = this.companys.sort((a: ICompany, b: ICompany) => {
        return a.business_name > b.business_name ? 1 : -1
      })
    }
    else {
      this.companys
    }
    return this.companys
  }
}