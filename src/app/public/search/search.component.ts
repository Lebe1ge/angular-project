import { Component, OnInit } from '@angular/core';

import { Serie } from '../../entity/serie';
import {SerieService} from "../../shared/serie/serie.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Attributes
  series: Serie[] = [];

  // Methods
  handleSeriesUpdated(series) {
    this.series = series;
    for(let serie of series ) {
      this.serieService
        .searchDetailSerie(serie.id)
        .subscribe(res => { serie.image = res.images.poster; serie.loaded = true; });
    }
  }

  // Lifecycle
  constructor(private serieService: SerieService) { }

  ngOnInit() {  }

}
