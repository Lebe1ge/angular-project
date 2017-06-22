import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Serie } from '../../entity/serie';
import { SerieService } from '../../shared/serie/serie.service';

@Component({
  selector: 'app-display-serie',
  templateUrl: './display-serie.component.html',
  styleUrls: ['./display-serie.component.css']
})
export class DisplaySerieComponent implements OnInit {

  serie: Serie;
  errorMessage: String;

  constructor(private activatedRoute: ActivatedRoute, private serieService: SerieService) { };

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getSerie(params['serieId'])
    });
  }

  getSerie(serieId) {
    this.serieService.getSerie(serieId)
    .subscribe(
      serie => this.serie = serie,
      error =>  this.errorMessage = <any>error);
  }
}
