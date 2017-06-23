import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import {SeasonService} from './season.service';
import {Serie} from '../../entity/serie';
import {SerieService} from '../serie/serie.service';
import {DataStorageService} from '../../data-storage.service';

const KEY_STORAGE_EPISODES = 'MyEpisodes';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  // Attributes
  serieId = '';
  serie: Serie;
  season = '';
  keyStorage: string;
  episodes = [];

  // Methods
  /**
   * Récupère une série
   */
  getSerie(): void {
    this
      .serieService
      .getSerie(this.serieId)
      .subscribe(serie => {
        this.serie = serie;
      });
  }
  /**
   * Récupère les épisodes d'une série et d'une saison
   */
  getEpisodes(): void {
    this
      .seasonService
      .getSeasonEpisodes(this.serieId, this.season)
      .subscribe(episodes => {

        for (let episode of episodes) {
          this.DataStorageService.setKeyStorage(this.keyStorage);
          if (this.DataStorageService.getById(episode.id)) {
            episode.seen = true;
          }
        }
        this.episodes = episodes;
      });
  }

  /**
   * Fonction permettant de revenir à la page précédente sur un component
   */
  goBack(): void {
    this.location.back();
  }

  // Lifecycle
  constructor(private seasonService: SeasonService,
    private serieService: SerieService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private DataStorageService: DataStorageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.serieId = params['serieId'];
      this.season = params['season'];
      this.getSerie();
      this.getEpisodes();
      this.keyStorage = KEY_STORAGE_EPISODES;
    });
  }

}
