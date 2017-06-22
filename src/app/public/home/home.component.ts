import { Component, OnInit } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SerieService } from '../../shared/serie/serie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Attributes
  series: Serie[];

  // Methods
  /*getSeries(): void {
    this.serieService.getSeries().then(series => this.series = series);
  }*/

  // Lifecycle
  constructor(private serieService: SerieService) { };

  ngOnInit(): void {
    /*this.getSeries();*/
  }
}
