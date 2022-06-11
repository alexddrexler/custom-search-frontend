import { Component, OnInit } from '@angular/core';

import { Search } from '../customsearch.model';
import { Facet } from '../facet.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // CuriosiPLE Engine ID.
  defaultEngineId: string = '0502f649faa67ea28';
  // Available facets.
  // These are copied from the custom search engine definition itself.
  // Hardcoding is preferred over fetching directly, due to limited/costly queries.
  // TODO: Probably should move this into a separate config at some point.
  facets: Facet[] = [
    {'displayName': 'Change the World', 'engineId': this.defaultEngineId, 'queryParam': 'more:change_the_world'},
    {'displayName': 'Play a Game', 'engineId': this.defaultEngineId, 'queryParam': 'more:play_a_game'},
    {'displayName': 'Join a Project', 'engineId': this.defaultEngineId, 'queryParam': 'more:join_a_project'},
    {'displayName': 'Read All About It', 'engineId': this.defaultEngineId, 'queryParam': 'more:read_all_about_it'},
    {'displayName': 'Browse Collections', 'engineId': this.defaultEngineId, 'queryParam': 'more:browse_collections'},
    {'displayName': 'Watch a Video', 'engineId': this.defaultEngineId, 'queryParam': 'more:watch_a_video'},
    {'displayName': 'Find a Learning Pal', 'engineId': this.defaultEngineId, 'queryParam': 'more:find_a_learning_pal'},
    {'displayName': 'Look at Images', 'engineId': this.defaultEngineId, 'queryParam': 'more:look_at_images'},
    {'displayName': 'Ask an Expert', 'engineId': this.defaultEngineId, 'queryParam': 'more:ask_an_expert'},
  ];

  query: string;
  selectedFacet: Facet = this.facets[0];

  searchResults?: Search;
  savedQuery?: string;
  savedFacet?: Facet;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void { }

  public handleSearch(): void {
    this.savedQuery = this.query;
    this.savedFacet = this.selectedFacet;
    this.getResults();
  }

  public getResults(start: number = 0): void {
    if (!this.savedQuery || !this.savedFacet) {
      return;
    }
    this.query = this.savedQuery;
    let fullQuery = this.savedQuery + ' ' + this.savedFacet.queryParam;
    this.searchService.getResults(this.savedFacet.engineId, fullQuery, start=start).subscribe(
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
