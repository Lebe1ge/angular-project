import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Serie } from '../../../entity/serie';

import { AuthService } from '../../../shared/auth/auth.service';
import { SerieService } from '..//serie.service';
import {DataStorageService} from '../../../data-storage.service';

@Component({
  selector: 'app-shared-display-serie',
  templateUrl: './display-serie.component.html',
  styleUrls: ['./display-serie.component.css']
})
export class DisplaySerieComponent implements OnInit {

  // Attributes
  serie: Serie;
  errorMessage: String;

  // Methods
  addToFavorite(serie: Serie): void {
    serie.favorite = true;
    this.dataStorageService.add(serie.id);
  }

  removeFavorite(serie: Serie): void {
    serie.favorite = false;
    this.dataStorageService.removeData(serie.id);
  }

  getSerie(serieId) {
    this.serieService.getSerie(serieId)
      .subscribe(
        serie => {
          if (this.dataStorageService.getById(serie.id)) {
            serie.favorite = true;
          }
          this.serie = serie;
        },
        error => {
          this.errorMessage = <any>error
        });
  }

  // Lifecycle
  constructor(
    public auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private serieService: SerieService,
    private dataStorageService: DataStorageService) { };

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getSerie(params['serieId'])
    });
  }
}
