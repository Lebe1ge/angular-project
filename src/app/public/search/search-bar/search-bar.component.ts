import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

import {Serie} from '../../../entity/serie';
import { SerieService } from '../../serie/serie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // Attributes
  searchTerm: string;
  isLoading = false;
  series = [];
  @Output() seriesUpdate = new EventEmitter();

  // Methods
  /**
   * Recheche des séries
   */
  searching(): void {
    this.isLoading = true;
    this.serieService
      .searchSeries(this.searchTerm)
      .subscribe(series => {
        this.series = series;
        this.seriesUpdate.emit(series);
        this.isLoading = false;
      });
  }

  // Lifecycle
  constructor(private serieService: SerieService) {

  }

  ngOnInit() {

  }

}
