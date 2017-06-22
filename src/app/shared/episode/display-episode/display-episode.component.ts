import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import {Episode} from '../../../entity/episode';



@Component({
  selector: 'app-display-episode',
  templateUrl: './display-episode.component.html',
  styleUrls: ['./display-episode.component.css']
})
export class DisplayEpisodeComponent implements OnInit {

    constructor(
        public auth: AuthService,
    ) {}

    // Attributes
    episode: Episode[] = [];

  ngOnInit() {
  }

}
