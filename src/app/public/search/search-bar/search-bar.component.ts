import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

import { SerieService } from '../../../shared/serie/serie.service';
import {Serie} from '../../../entity/serie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // Attributes
  searchForm: FormGroup;
  searchTerm: string;
  isLoading = false;
  @Output() series = new EventEmitter();

  // Methods


  // Lifecycle
  constructor(private serieService: SerieService, private fb: FormBuilder) {
    this.searchForm = fb.group({
      searchTerm: []
    });
  }

  ngOnInit() {
    this.searchForm
      .valueChanges
      .map(search => search.searchTerm)
      .filter(searchTerm => (searchTerm.length >= 3))
      .debounceTime(400)
      .flatMap(searchTerm => {
        this.isLoading = true;
        return this.serieService.searchSeries(searchTerm);
      })
      .subscribe(
        series => {
          this.series.emit(series);
          this.isLoading = false;
        },
        err => console.error(err)
      );
  }

}
