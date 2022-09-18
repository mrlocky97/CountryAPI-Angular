import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTCountryResponse } from '../interface/responseCountry';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountry(termino: string): Observable<RESTCountryResponse[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<RESTCountryResponse[]>(url);
  }

  getCountryForId(id: string): Observable<RESTCountryResponse>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<RESTCountryResponse>(url);
  }

  searchByRegion(region:string): Observable<RESTCountryResponse>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<RESTCountryResponse>(url);
  }
}
