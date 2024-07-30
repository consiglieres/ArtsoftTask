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
  
  protected object?: object

  constructor(private activatedRoute: ActivatedRoute, private getCompanyService: GetCompanyService){}

  ngOnInit(): void {
    let company: ICompany[]
    this.getCompanyService.getCompany().subscribe(value => company = value)
    this.activatedRoute.params.subscribe((params: Params) => {
      this.object = company[params['id'] - 1]
    });
  }
} 
