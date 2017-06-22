import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SerieService } from '../../shared/serie/serie.service';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-my-series',
  templateUrl: './my-series.component.html',
  styleUrls: ['./my-series.component.css']
})
export class MySeriesComponent implements OnInit {

  @Input() series: Serie[];

  constructor(private SerieService: SerieService, private DataStorageService: DataStorageService) { }

  ngOnInit() {
    this.SerieService
    .getUserSeries(this.DataStorageService.getAllData())
    .subscribe(series => {
      console.log(series);
      this.series = series;
    });
  }

}
