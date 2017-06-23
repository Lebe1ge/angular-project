import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { DataStorageService } from '../../data-storage.service';
import { ActivatedRoute, Params } from '@angular/router';

const nameService = 'serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  // Attributes

  // Methods

  // Lifecycle

  addSerie(id: number): void {
    this.DataStorageService.add(id);
  }

  deleteSerie(id: number): void {
    this.DataStorageService.removeData(id);
  }

  getSerie(): void {
    this.DataStorageService.getAllData()
  }

  constructor(private SerieService: SerieService, private ActivatedRoute: ActivatedRoute, private DataStorageService: DataStorageService) {}

  ngOnInit() {
  }

}
