import { Component, OnInit } from '@angular/core';
import { GetCompanyService } from '../../services/get-company.service';
import { ICompany } from '../../interfaces/company.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CompanyItemComponent implements OnInit{

  public company$?: Observable<ICompany[]>;

  constructor(private getCompanyService: GetCompanyService){}

  ngOnInit(): void {
    this.company$ = this.getCompanyService.getCompany()
  }
}
