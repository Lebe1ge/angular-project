import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../entity/serie';

@Component({
  selector: 'app-my-series',
  templateUrl: './my-series.component.html',
  styleUrls: ['./my-series.component.css']
})
export class MySeriesComponent implements OnInit {

  @Input() series: Serie[];

  constructor() { }

  ngOnInit() {
  }

}
