import {Component, Input, OnInit} from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../../shared/auth/auth.service';
import {Episode} from '../../../entity/episode';
import {DataStorageService} from '../../../data-storage.service';

const KEY_STORAGE_EPISODES = 'MyEpisodes';

@Component({
  selector: 'app-bloc-episode',
  templateUrl: './bloc-episode.component.html',
  styleUrls: ['./bloc-episode.component.css']
})
export class BlocEpisodeComponent implements OnInit {

  // Attributes
  keyStorage: string;
  @Input() episode;

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
   * Récupère tous les épisodes vus d'une série
   */
  allSeen() :void {
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }
    this.DataStorageService.setKeyStorage(this.keyStorage);
    this.DataStorageService.getAllData();
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


  // Lifecycle
  constructor(
  private auth: AuthService, 
  private DataStorageService: DataStorageService, 
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.keyStorage = KEY_STORAGE_EPISODES;
    });
  }
}
