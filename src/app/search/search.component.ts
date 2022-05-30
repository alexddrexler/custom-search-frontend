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
  selectedFacet?: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void { }

  public getResults(query: string, start: number = 0): void {
    this.query = query;
    let fullQuery = this.query;
    if (this.selectedFacet) {
      console.log('FACET!')
      fullQuery = fullQuery + ' ' + this.selectedFacet;
    }
    this.searchService.getResults(this.engineId, fullQuery, start=start).subscribe(
      (response) => {
        console.log(response);
        this.searchResults = response;
      },
      (error) => {
        console.error('Request failed with error!');
        console.error(error);
      },
      () => {
        console.log('Request complete.');
      })
  }

}
