import { Component, OnInit } from '@angular/core';

import { Search } from '../customsearch.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  searchResults?: Search; 

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  public getResults(query: string, start: number = 0): void {
    this.query = query;
    this.searchService.getResults(query, start).subscribe(
      (response) => {
        console.log(response);
        this.searchResults = response;
      },
      (error) => {
        console.error('Request failed with error!');
      },
      () => {
        console.log('Request complete.');
      })
  }

}
