import { Component } from '@angular/core';
import { ICompany } from '../../interfaces/company.interface';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CompanyItemComponent{

  public companys: ICompany[] = this.filterService.companys


  constructor(public filterService: FilterService){}


}
