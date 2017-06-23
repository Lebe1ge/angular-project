import {Component, Input, OnInit} from '@angular/core';

import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-bloc-episode',
  templateUrl: './bloc-episode.component.html',
  styleUrls: ['./bloc-episode.component.css']
})
export class BlocEpisodeComponent implements OnInit {

  // Attributes
  @Input() episode;

  // Methods


  // Lifecycle
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
