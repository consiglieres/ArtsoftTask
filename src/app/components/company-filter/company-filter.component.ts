import { Component, OnInit } from '@angular/core';
import { GetCompanyService } from '../../services/get-company.service';
import { ICompany } from '../../interfaces/company.interface';
import { FilterService } from '../../services/filter.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IParametrs } from '../../interfaces/paranetrs.interface';
import { IParametrControls } from '../../interfaces/parametr-controls.interface';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.css'
})
export class CompanyFilterComponent implements OnInit{
  // Основной мвссив двнных
  protected companys: ICompany[] = this.getCompanyService.getCompany();

  // Фильтры
  protected inputIndustry?: string[];
  protected inputType?: string[];

  // Получение данных с фильтра
  public inputForms: FormGroup = new FormGroup<IParametrControls>({
    inputCompany: new FormControl<string>(''),
    inputIndustry: new FormControl<string>(''),
    inputType: new FormControl<string>('')
  })

  constructor(private getCompanyService: GetCompanyService, private filterService: FilterService){}

  ngOnInit(): void {
    this.inputIndustry = this.filterService.inputIndustryFilter
    this.inputType = this.filterService.inputTypeFilter
  }

  public detectCreate(): void{
    const inputFormsSend: IParametrs = {
      inputCompany: this.inputForms.controls['inputCompany'].value,
      inputIndustry: this.inputForms.controls['inputIndustry'].value,
      inputType: this.inputForms.controls['inputType'].value
    }
    console.log(inputFormsSend.inputCompany, inputFormsSend.inputIndustry, inputFormsSend.inputType)
    this.filterService.FiltersCompany(inputFormsSend.inputCompany, inputFormsSend.inputIndustry, inputFormsSend.inputType)
  }
}