import { Component, OnInit } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SerieService } from '../../shared/serie/serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  series: Serie[];
  selectedSerie: Serie;

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  };

  getSeries(): void {
    this.serieService.getSeries().then(series => this.series = series);
  }

  ngOnInit(): void {
    this.getSeries();
  }

  constructor(private serieService: SerieService) { };

}
