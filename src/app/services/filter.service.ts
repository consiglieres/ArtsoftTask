import { Injectable } from '@angular/core';
import { ICompany } from '../interfaces/company.interface';
import { SortService } from './sort.service';

@Injectable()
export class FilterService {
  // Основной и вспомогательный массивы
  public companys: ICompany[] = this.sortService.companys;
  
  // Фильтрация пунктов в списках
  public inputIndustryFilter: string[] = [...new Set(this.companys.map((e) => {return e.industry}))]
  public inputTypeFilter: string[] = [...new Set(this.companys.map(e => {return e.type}))]

  constructor(private sortService: SortService){};

  // Фильтрация списка по параметрам
  public FiltersCompany(searchCompany: string, inputIndustry: string, inputType: string): ICompany[]{
    console.log(searchCompany, inputIndustry, inputType)
    if(searchCompany != ''){
      return this.companys = this.companys.filter(arr => { return arr.business_name.includes(searchCompany)});
    }
    else{
      return this.companys
    }
  };
};