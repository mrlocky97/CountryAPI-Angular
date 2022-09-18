import { Component, OnInit } from '@angular/core';
import { RESTCountryResponse } from '../../interface/responseCountry';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit {

  termino: string = "";
  error: boolean = false;
  countries: RESTCountryResponse[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(termino: string) {
    this.error = false;
    this.termino = termino;

    this.countryService.searchCountry(termino)
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
