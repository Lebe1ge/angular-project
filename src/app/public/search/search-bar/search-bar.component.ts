import {Component, Input, OnInit} from '@angular/core';

import { SerieService } from '../../../shared/serie/serie.service';
import {Serie} from '../../../entity/serie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // Attributes
  searchTerm: string;
  isLoading = false;
  // @Output series: Serie[];

  // Methods
  search(searchTerm: HTMLInputElement): void {
      console.log(`User entered: ${searchTerm}`);
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.searchSeries(this.searchTerm);
  }

  // Lifecycle
  constructor(private serieService: SerieService) { }

  ngOnInit() {
  }

}
