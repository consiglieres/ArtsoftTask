import { Component, OnInit } from '@angular/core';
import { GetCompanyService } from '../../services/get-company.service';
import { Observable } from 'rxjs';
import { ICompany } from '../../interfaces/company.interface';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.css'
})
export class CompanyFilterComponent implements OnInit{

  constructor(private getCompanyService: GetCompanyService){}

  protected company$?: Observable<ICompany[]>

  ngOnInit(): void {
    this.company$ = this.getCompanyService.getCompany()
  }
}
