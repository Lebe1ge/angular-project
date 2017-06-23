import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Episode } from '../../../entity/episode';
import { AuthService } from '../../../shared/auth/auth.service';
import { EpisodeService } from '../episode.service';
import { DataStorageService } from '../../../data-storage.service';
import { Location } from '@angular/common';

const KEY_STORAGE_EPISODES = 'MyEpisodes';

@Component({
  selector: 'app-shared-display-episode',
  templateUrl: './display-episode.component.html',
  styleUrls: ['./display-episode.component.css']
})
export class DisplayEpisodeComponent implements OnInit {

  // Attributes
  episode: Episode;
  errorMessage: String;
  keyStorage: string;
  @Input() episodeInput: Episode;


  // Methods

  /**
   * Ajoute un épisode dans ceux qui sont vus
   * @param id
   */
  addToSeen(episode: Episode): void {

    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }
    episode.seen = true;
    this.DataStorageService.setKeyStorage(this.keyStorage);
    this.DataStorageService.add(episode.id);
  }

  /**
   * Check si l'épisode a déjà été vu
   * @param id
   */
  isSeen(id: number): void {
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }
    this.DataStorageService.setKeyStorage(this.keyStorage);
    this.DataStorageService.getById(id);
  }

  /**
   * Supprime l'épisode des épisodes vus
   * @param id
   */
  removeSeen(episode: Episode): void {
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }
    episode.seen = false;
    this.DataStorageService.setKeyStorage(this.keyStorage);
    this.DataStorageService.removeData(episode.id);
  }

  getSerie(episodeId) {
    this.episodeService.getEpisode(episodeId)
      .subscribe(
        episode => this.episode = episode,
        error =>  this.errorMessage = <any>error);
  }

  goBack(): void {
    this.location.back();
  }

  // Lifecycle
  constructor(
    public auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private episodeService: EpisodeService,
    private DataStorageService: DataStorageService,
    private router: Router,
    private location: Location
  ) { };

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getSerie(params['episodeId']);
      this.keyStorage = KEY_STORAGE_EPISODES;
    });
  }

  getSerie(episodeId) {
    this.episodeService.getEpisode(episodeId)
      .subscribe(
      episode => this.episode = episode,
      error => this.errorMessage = <any>error);
  }
}
