import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../../../entity/serie';

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


  // Lifecycle
  constructor() { }

  ngOnInit() {
  }

}
