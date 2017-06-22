import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../../../entity/serie';
import { DataStorageService } from '../../../data-storage.service';

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
  addToFavorite(id: string) :void{
    this.DataStorageService.add(id)
  }
  
  allFavorite() :void {
    this.DataStorageService.getAllData();
  }

  isFavorite(id: number): void {
    this.DataStorageService.getFavoriteById(id);
  }

  removeFavorite(id: string) :void{
    this.DataStorageService.removeData(id);
  }

  // Lifecycle
  constructor(private DataStorageService: DataStorageService) { }

  ngOnInit() {
  }

}
