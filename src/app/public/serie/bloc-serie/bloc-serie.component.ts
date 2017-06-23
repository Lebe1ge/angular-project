import { Component, Input, OnInit } from '@angular/core';

import { Serie } from '../../../entity/serie';
import { DataStorageService } from '../../../data-storage.service';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-bloc-serie',
  templateUrl: './bloc-serie.component.html',
  styleUrls: ['./bloc-serie.component.css']
})
export class BlocSerieComponent implements OnInit {

  // Attributes
  @Input() serie: Serie;
  @Input() isLoading = true;

  // Methods
  addToFavorite(serie: Serie): void {
    serie.favorite = true;
    this.DataStorageService.add(serie.id);
  }

  allFavorite(): void {
    this.DataStorageService.getAllData();
  }

  isFavorite(id: number): void {
    this.DataStorageService.getFavoriteById(id);
  }

  removeFavorite(serie: Serie): void {
    serie.favorite = false;
    this.DataStorageService.removeData(serie.id);
  }

  // Lifecycle
  constructor(
    private DataStorageService: DataStorageService,
    private auth: AuthService) { }

  ngOnInit() {
  }

}
