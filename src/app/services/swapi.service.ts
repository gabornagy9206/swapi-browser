import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private baseURL = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getSwapiData(attribute = '', item = 0) {
    if (item === 0) {
      return this.http.get(this.baseURL + `${attribute}`);
    } else {
      return this.http.get(this.baseURL + `${attribute}/${item}`);
    }
  }

  changePage(url: string) {
    return this.http.get(url);
  }

  searchItem(searchPhrase: string) {
    return this.http.get(this.baseURL + `people/?search=${searchPhrase}`);
  }
}
