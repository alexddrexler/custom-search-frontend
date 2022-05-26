import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Search } from './customsearch.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchUri = 'https://customsearch.googleapis.com/customsearch/v1';
  private apiKey = 'AIzaSyA5sveaQ8ohgad3x7GtaWp6-mZklfMjr8s';
  private engineId = '12c80147f4b13d8be';

  private baseUri: string = this.searchUri + '?cx=' + this.engineId + '&key=' + this.apiKey;

  constructor(private http: HttpClient) { }

  getResults(query: string, start: number = 0): Observable<Search> {
    let uri = this.baseUri + '&q=' + encodeURIComponent(query) + '&start=' + start;
    return this.http.get<Search>(uri)
  }
}
