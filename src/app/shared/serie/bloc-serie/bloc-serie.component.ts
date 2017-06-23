import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../../../entity/serie';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../../data-storage.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import {AuthService} from "../../auth/auth.service";
>>>>>>> 3dfe6aec175de4fa3ce7a62dd2b1e6aa27b4726a

@Component({
  selector: 'app-bloc-serie',
  templateUrl: './bloc-serie.component.html',
  styleUrls: ['./bloc-serie.component.css']
})
export class BlocSerieComponent implements OnInit {

  // Attributes
  @Input() serie: Serie;
  @Input() isLoading = true;

<<<<<<< HEAD
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
=======
  // Methods
  addToFavorite(serie: Serie) :void{
    serie.favorite = true;
    this.DataStorageService.add(serie.id);
  }

>>>>>>> 3dfe6aec175de4fa3ce7a62dd2b1e6aa27b4726a
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

<<<<<<< HEAD
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
=======
  removeFavorite(serie: Serie): void {
    serie.favorite = false;
    this.DataStorageService.removeData(serie.id);
  }

  // Lifecycle
  constructor(
    private DataStorageService: DataStorageService,
    private auth: AuthService) { }
>>>>>>> 3dfe6aec175de4fa3ce7a62dd2b1e6aa27b4726a

  ngOnInit() {
  }

}
