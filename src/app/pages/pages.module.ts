import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    ListComponent,
    MapComponent,
    CompanyDetailComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterLink,
    ComponentsModule
  ],
  exports: [],
  providers: [],
})
export class PagesModule {}