import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Search } from './customsearch.model';

// 12c80147f4b13d8be

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchUri = 'https://customsearch.googleapis.com/customsearch/v1';
  private apiKey = 'AIzaSyA5sveaQ8ohgad3x7GtaWp6-mZklfMjr8s';

  private baseUri: string = this.searchUri + '?key=' + this.apiKey;

  constructor(private http: HttpClient) { }

  getResults(engineId: string, query: string, start?: number): Observable<Search> {
    let uri = this.baseUri + '&cx=' + encodeURIComponent(engineId) + '&q=' + encodeURIComponent(query);
    if (start) {
      uri = uri + '&start=' + start;
    }
    return this.http.get<Search>(uri)
  }
}
