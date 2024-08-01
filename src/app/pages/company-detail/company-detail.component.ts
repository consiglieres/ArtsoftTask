import { Component, OnInit } from '@angular/core';
import { GetCompanyService } from '../../services/get-company.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ICompany } from '../../interfaces/company.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit{
  protected object?: ICompany;
  protected companys: ICompany[] = this.getCompanyService.getCompany()

  constructor(private activatedRoute: ActivatedRoute, private getCompanyService: GetCompanyService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.object = this.companys[params['id'] - 1]
      console.log(this.object)
    });
  }
}
