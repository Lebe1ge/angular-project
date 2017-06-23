import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../../../entity/serie';
import { AuthService } from '../../../shared/auth/auth.service';
import { DataStorageService } from '../../../data-storage.service';
import { Router } from '@angular/router';

const KEY_STORAGE_SERIE = 'MySeries';

@Component({
  selector: 'app-bloc-serie',
  templateUrl: './bloc-serie.component.html',
  styleUrls: ['./bloc-serie.component.css']
})
export class BlocSerieComponent implements OnInit {

  // Attributes
  @Input() serie: Serie;
  @Input() isLoading = true;

  /**
   * Ajoute aux favoris une série
   * @param id
   */
  addToFavorite(serie: Serie): void {

    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }

    serie.favorite = true;
    this.DataStorageService.setKeyStorage(KEY_STORAGE_SERIE);
    this.DataStorageService.add(serie.id);
  }

  allFavorite() :void {
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }
    this.DataStorageService.setKeyStorage(KEY_STORAGE_SERIE);
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
    this.DataStorageService.setKeyStorage(KEY_STORAGE_SERIE);
    this.DataStorageService.getById(id);  
  }

  /**
   * Supprime la série des favoris
   * @param id
   */

  removeFavorite(serie: Serie): void {
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }
    serie.favorite = false;
    this.DataStorageService.setKeyStorage(KEY_STORAGE_SERIE);
    this.DataStorageService.removeData(serie.id);
  }

  // Lifecycle
  constructor(private DataStorageService: DataStorageService, private auth: AuthService, private router: Router) { }


  ngOnInit() {
  }

}
