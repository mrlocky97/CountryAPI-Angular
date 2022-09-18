import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountryResponse } from '../interface/responseCountry';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCapital(termino: string): Observable<RESTCountryResponse[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<RESTCountryResponse[]>(url);
  }
}
