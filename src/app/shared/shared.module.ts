import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { Routes, RouterModule } from '@angular/router';
import {Http} from '@angular/http';

import { SerieComponent } from './serie/serie.component';
import {CallbackComponent} from './callback/callback.component';

import { AuthService } from './auth/auth.service';
import { SerieService } from './serie/serie.service';
import { DataStorageService } from '../data-storage.service';

import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';
import { BlocSerieComponent } from './serie/bloc-serie/bloc-serie.component';
import { DisplaySerieComponent } from './serie/display-serie/display-serie.component';
import { DisplaySeasonComponent } from './season/display-season/display-season.component';
import { DisplayEpisodeComponent } from './episode/display-episode/display-episode.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
      RouterModule
  ],
  declarations: [
    SerieComponent,
    CallbackComponent,
    SeasonComponent,
    EpisodeComponent,
    DisplaySerieComponent,
      DisplaySeasonComponent,
      DisplayEpisodeComponent
  ],
    exports: [
        DisplaySerieComponent
    ],
    bootstrap: [
        DisplaySerieComponent
    ],
  providers: [
    SerieService,
    AuthService,
    Http,
    DataStorageService
  ],
})
export class SharedModule {
    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }
}
