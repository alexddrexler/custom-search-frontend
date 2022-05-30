import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Context } from './customsearch.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public searchEngineId: string;
  public searchEngineName: string = "Custom Search Engine"

  public searchEngineContext: Context;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchEngineId = params['cx'];
      if (this.searchEngineId) {
        this.getContext(this.searchEngineId);
      }
    });
  }

  public getContext(engineId: string) {
    this.searchService.getResults(this.searchEngineId, '$').subscribe(
      (response) => {
        console.log(response);
        this.searchEngineContext = response.context;
        this.searchEngineName = this.searchEngineContext.title;
        this.route
      },
      (error) => {
        console.error('Request failed with error!');
        console.error(error);
      },
      () => {
        console.log('Request complete.');
      })

  }

  public handleIdInput(engineId: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {'cx': engineId} 
    });  
  }
}
