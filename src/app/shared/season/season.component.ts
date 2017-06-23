import { Component, OnInit } from '@angular/core';

import {SeasonService} from './season.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  // Attributes
  serieId = '';
  season = '';
  episodes = [];

  // Methods
  getEpisodes(): void {
    this
      .seasonService
      .getSeasonEpisodes(this.serieId, this.season)
      .subscribe(episodes => {
        console.log(episodes);
        this.episodes = episodes;
      });
  }

  // Lifecycle
  constructor(private seasonService: SeasonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.serieId = params['serieId'];
      this.season = params['season'];
      this.getEpisodes();
    });
  }

}
