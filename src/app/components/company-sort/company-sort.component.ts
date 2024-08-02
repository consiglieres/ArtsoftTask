import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.css'
})

export class CompanySortComponent {
  public sortParameter: string = '';

  constructor(private companyService: CompanyService){}

  protected onChange(){
    this.companyService.SortCompany(this.sortParameter)
  }
}
