import { Component, OnInit } from '@angular/core';

import { Serie } from '../../entity/serie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Attributes
  series: Serie[] = [];

  // Methods


  // Lifecycle
  constructor() { }

  ngOnInit() {  }

}
