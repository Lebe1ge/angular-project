import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {Episode} from '../../../entity/episode';
import {DataStorageService} from '../../../data-storage.service';

@Component({
  selector: 'app-bloc-episode',
  templateUrl: './bloc-episode.component.html',
  styleUrls: ['./bloc-episode.component.css']
})
export class BlocEpisodeComponent implements OnInit {

  // Attributes
  @Input() episode;

  /**
   * Ajoute aux favoris une série
   * @param id 
   */
  addToFavorite(episode: Episode): void {

    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }  

    episode.seen = true;
    this.DataStorageService.add(episode.id);
  }

  /**
   * Récupère tous les favoris
   */
  allFavorite() :void {
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }
    this.DataStorageService.getAllData();
  }

  /**
   * Check si la série est déjà mis en favorite ou non
   * @param id 
   */
  isFavorite(id: number): void {
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }
    this.DataStorageService.getById(id);  
  }

  /**
   * Supprime la série des favoris
   * @param id 
   */

  removeFavorite(episode: Episode): void {
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);  
    }
    episode.seen = false;
    this.DataStorageService.removeData(episode.id);
  }


  // Lifecycle
  constructor(private auth: AuthService, private DataStorageService: DataStorageService, private router: Router) { }

  ngOnInit() {
  }

}
