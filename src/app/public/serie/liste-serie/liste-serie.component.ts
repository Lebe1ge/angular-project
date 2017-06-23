import { Component, Input, OnInit } from '@angular/core';

import { Serie } from '../../../entity/serie';

@Component({
  selector: 'app-liste-serie',
  templateUrl: './liste-serie.component.html',
  styleUrls: ['./liste-serie.component.css']
})
export class ListeSerieComponent implements OnInit {

  // Attributes
  @Input() series: Serie[];

  // Methods

  // Lifecycle
  constructor() { }

  ngOnInit() {
  }

}
