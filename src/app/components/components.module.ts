import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { GetCompanyService } from '../services/get-company.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { RouterLink } from '@angular/router';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';

@NgModule({
  declarations: [
    CompanyItemComponent,
    HeaderComponent,
    CompanySortComponent,
    CompanyFilterComponent,
  ],
  imports: [ 
    RouterLink,
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    CompanyItemComponent,
    HeaderComponent,
    CompanySortComponent,
    CompanyFilterComponent
  ],
  providers: [
    GetCompanyService
  ],
})
export class ComponentsModule {}