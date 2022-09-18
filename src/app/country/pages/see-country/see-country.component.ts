import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { RESTCountryResponse } from '../../interface/responseCountry';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {
  idCountry:string = "";
  load: boolean = false;
  //country = {} as RESTCountryResponse;
  country!:RESTCountryResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: CountryService
  ) {}

  ngOnInit(): void {
    //capturo el id de la ruta por snapshot
    this.idCountry = this.activatedRoute.snapshot.params['id'];
    console.log("id pais a buscar: ", this.idCountry);
    
    this.paisService.getCountryForId(this.idCountry).subscribe((resp) =>{
      this.country = resp;
      this.load = true;
      console.log(resp.name);
    });
    
    /*
    this.activatedRoute.params
      // pipe resive un obsevable y devuleve el resultado de ese como otro obsevable
      .pipe(// ({ id }) esto es una desestructuracion
        switchMap(({ id }) => this.paisService.getCountryForId(id)),
        tap(params => console.log("parameters: ", params))// resive el obsevable y lo imprime por oantalla
      )
      .subscribe(params => {
        this.country = params;
        console.log("nombre pais: ", this.country.name);
      });
      */
    /*
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getCountryForId(id)),
        tap(resp => console.log(resp))
      )
      .subscribe(pais => this.country = pais);
      */  
  }
  
}
