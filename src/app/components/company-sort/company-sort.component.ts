import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.css'
})
export class CompanySortComponent {

  // protected sortParametrs: FormControl = new FormControl('')

  public onClick(): void{
    console.log('click')
  }
}
