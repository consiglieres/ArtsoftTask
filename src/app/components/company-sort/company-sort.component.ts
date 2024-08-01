import { Component, Injectable } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.css'
})

export class CompanySortComponent {
  public sortParametrs: string = '';

  constructor(private sortService: SortService){}

  protected onChange(){
    this.sortService.SortCompany(this.sortParametrs)
  }
}
