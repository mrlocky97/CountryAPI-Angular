import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { RESTCountryResponse } from '../../interface/responseCountry';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [`
  button{
    margin-right: 3em;
    margin-bottom: 1em;
  }
  `
  ]
})
export class RegionComponent {

  regions: string[] = ["EU ", "EFTA ", "CARICOM", "PA", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
  activeRegion: string = "";
  country: RESTCountryResponse | undefined;

  constructor(private countryService: CountryService) { }

  getClassCss(region: string): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activeRegionM(region: string): string {
    this.countryService.searchByRegion(region).subscribe((region) => {
      this.country = region;
    });
    return this.activeRegion = region;
  }
}
