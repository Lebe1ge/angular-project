import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import {Serie} from '../../entity/serie';


@Component({
  selector: 'app-shared-display-serie',
  templateUrl: './display-serie.component.html',
  styleUrls: ['./display-serie.component.css']
})
export class DisplaySerieComponent implements OnInit {

  constructor(
      public auth: AuthService,
  ) {}

    // Attributes
    show: Serie[] = [];

  ngOnInit() {
  }

}
