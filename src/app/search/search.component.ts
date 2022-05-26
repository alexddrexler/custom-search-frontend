import { Component, OnInit, Input } from '@angular/core';

import { Search, Context } from '../customsearch.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() engineId: string;
  @Input() context: Context;


  query: string;
  searchResults?: Search; 

  constructor(private searchService: SearchService) { }

  ngOnInit(): void { }

  public getResults(query: string, start: number = 0): void {
    this.query = query;
    this.searchService.getResults(this.engineId, query, start=start).subscribe(
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
