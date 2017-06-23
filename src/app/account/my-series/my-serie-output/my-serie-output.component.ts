import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Serie } from '../../../entity/serie';
import { SerieService } from '../../../public/serie/serie.service';
import { DataStorageService } from '../../../data-storage.service';

const KEY_STORAGE_SERIES = 'MySeries';

@Component({
  selector: 'app-my-serie-output',
  templateUrl: './my-serie-output.component.html',
  styleUrls: ['./my-serie-output.component.css']
})
export class MySerieOutputComponent implements OnInit {

  // Attributes
  searchTerm: string;
  isLoading = false;
  series = [];

  @Output() seriesUpdate = new EventEmitter();

  constructor(private SerieService: SerieService, private DataStorageService: DataStorageService) { }

  ngOnInit() {
    this.DataStorageService.setKeyStorage(KEY_STORAGE_SERIES);
    this.SerieService
    .getUserSeries(this.DataStorageService.getAllData())
    .subscribe(series => {
      this.series = series;
      this.seriesUpdate.emit(series);
      this.isLoading = false;
    });
  }

}
