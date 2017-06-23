import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../../../entity/serie';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../../data-storage.service';
import { Router } from '@angular/router';

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
  addToFavorite(id: string) :void{
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);
    }  
    this.DataStorageService.add(id)
  }
  
  /**
   * Récupère tous les favoris d'une personne
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
  removeFavorite(id: string) :void{
    if( !this.auth.isAuthenticated ) {
      this.router.navigate(['/']);  
    }
    this.DataStorageService.removeData(id);
  }

  // Lifecycle
  constructor(private DataStorageService: DataStorageService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
