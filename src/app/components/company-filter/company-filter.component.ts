import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IParameters } from '../../interfaces/parameters.interface';
import { IParameterControls } from '../../interfaces/parameter-controls.interface';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.css'
})
export class CompanyFilterComponent{
  // Фильтры
  protected inputIndustryFilter: string[] = this.companyService.filterInputIndustry;
  protected inputTypeFilter: string[] = this.companyService.filterInputType;

  // Получение данных с фильтра
  public inputForms: FormGroup = new FormGroup<IParameterControls>({
    inputCompany: new FormControl<string>(''),
    inputIndustry: new FormControl<string>(''),
    inputType: new FormControl<string>('')
  });

  constructor( private companyService: CompanyService, private cd: ChangeDetectorRef){}
  

  public detectCreate(): void{
    const inputFormsSend: IParameters = {
      inputCompany: this.inputForms.controls['inputCompany'].value,
      inputIndustry: this.inputForms.controls['inputIndustry'].value,
      inputType: this.inputForms.controls['inputType'].value
    };
    this.companyService.FiltersCompany(inputFormsSend.inputCompany, inputFormsSend.inputIndustry, inputFormsSend.inputType)
  }
}