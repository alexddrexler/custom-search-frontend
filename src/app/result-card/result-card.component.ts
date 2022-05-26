import { Component, OnInit, Input } from '@angular/core';

import { Result } from '../customsearch.model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

  @Input() result?: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
