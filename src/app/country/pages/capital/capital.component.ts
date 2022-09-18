import { Component, OnInit } from '@angular/core';
import { RESTCountryResponse } from '../../interface/responseCountry';

import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit {

  termino: string = "";
  error: boolean = false;
  countries: RESTCountryResponse[] = [];

  constructor(private CapitalService: CapitalService) { }

  ngOnInit(): void {
  }

  search(termino: string) {
    this.error = false;
    this.termino = termino;

    this.CapitalService.searchCapital(termino)
      .subscribe((countries) => {
        this.countries = countries;
        console.log(countries);
      }, (err) => {
        this.error = true;
        this.countries = [];
      });
  }
  suggestions(termino: string) {
    this.error = false;
  }


}
