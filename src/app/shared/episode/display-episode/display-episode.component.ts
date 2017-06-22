import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Episode } from '../../../entity/episode';

import { AuthService } from './../../auth/auth.service';
import { EpisodeService } from '../../../shared/episode/episode.service';

@Component({
  selector: 'app-shared-display-episode',
  templateUrl: './display-episode.component.html',
  styleUrls: ['./display-episode.component.css']
})
export class DisplayEpisodeComponent implements OnInit {

  episode: Episode;
  errorMessage: String;

  constructor(public auth: AuthService, private activatedRoute: ActivatedRoute, private episodeService: EpisodeService) { };

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getSerie(params['episodeId'])
    });
  }

  getSerie(episodeId) {
    this.episodeService.getEpisode(episodeId)
    .subscribe(
      episode => this.episode = episode,
      error =>  this.errorMessage = <any>error);
  }
}
