import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ICompany } from '../../interfaces/company.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-detail',
  templateUrl: './company-detail.page.html',
  styleUrl: './company-detail.page.css'
})
export class CompanyDetailComponent implements OnInit{
  protected object?: ICompany;
  protected companies: ICompany[] = this.companyService.arrCompanies
  private _destroyRef: DestroyRef = inject(DestroyRef)

  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      takeUntilDestroyed(this._destroyRef)
    )
    .subscribe((params: Params) => {
      this.object = this.companies.find((company: ICompany) => company.id === Number(params['id']));
      console.log(this.object)
    });
  }
}
