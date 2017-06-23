import {Component, Input, OnInit} from '@angular/core';

import {Serie} from '../../../entity/serie';

@Component({
  selector: 'app-serie-banner',
  templateUrl: './serie-banner.component.html',
  styleUrls: ['./serie-banner.component.css']
})
export class SerieBannerComponent implements OnInit {

  // Attributes
  @Input() serie: Serie;

  constructor() { }

  ngOnInit() {
  }

}
