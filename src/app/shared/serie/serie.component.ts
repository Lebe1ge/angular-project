import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { DataStorageService } from '../../data-storage.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SERIES } from '../../entity/mock-serie';

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

  addSerie(): void {
    this.DataStorageService.updateOrAddData(SERIES, nameService)
  }

  deleteSerie(): void {
    this.DataStorageService.removeData(SERIES, nameService)
  }

  getSerie(): void {
    this.DataStorageService.getData(SERIES, nameService)
  }

  constructor(private SerieService: SerieService, private ActivatedRoute: ActivatedRoute, private DataStorageService: DataStorageService) {} 

  ngOnInit() {
  }

}
