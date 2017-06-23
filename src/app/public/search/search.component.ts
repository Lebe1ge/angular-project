import { Component, OnInit } from '@angular/core';

import { Serie } from '../../entity/serie';
import { SerieService } from '../serie/serie.service';
import {DataStorageService} from '../../data-storage.service';

const KEY_STORAGE_SERIES = "MySeries";

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
    for (let serie of series) {
      this.serieService
        .searchDetailSerie(serie.id)
        .subscribe(res => {
          serie.image = res.images.poster;
          this.DataStorageService.setKeyStorage(KEY_STORAGE_SERIES);
          if (this.DataStorageService.getById(serie.id)) {
            serie.favorite = true;
          }
          serie.loaded = true;
        });
    }
  }

  // Lifecycle
  constructor(private serieService: SerieService, private DataStorageService: DataStorageService) { }

  ngOnInit() { }

}
