import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SerieService } from '../../public/serie/serie.service';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-my-series',
  templateUrl: './my-series.component.html',
  styleUrls: ['./my-series.component.css']
})
export class MySeriesComponent implements OnInit {

  @Input() series: Serie[];

  handleSeriesUpdated(series) {
    this.series = series;
    for(let serie of series ) {
      this.SerieService
        .searchDetailSerie(serie.id)
        .subscribe(res => {
          serie.image = res.images.poster;
          if (this.DataStorageService.getFavoriteById(serie.id)) {
            serie.favorite = true;
          }
          serie.loaded = true;
        });
    }
  }

  constructor(private SerieService: SerieService, private DataStorageService: DataStorageService) { }

  ngOnInit() {
  }

}
