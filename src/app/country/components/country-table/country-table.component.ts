import { Component, Input, OnInit } from '@angular/core';
import { RESTCountryResponse } from '../../interface/responseCountry';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent implements OnInit {

  @Input() countries: RESTCountryResponse[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
