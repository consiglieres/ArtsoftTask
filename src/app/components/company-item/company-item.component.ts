import { Component } from '@angular/core';
import { ICompany } from '../../interfaces/company.interface';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CompanyItemComponent{
  public companies: ICompany[] = this.companyService.arrCompanies

  constructor(public companyService: CompanyService){}
}
