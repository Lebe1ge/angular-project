import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HttpModule } from '@angular/http';

import { SerieComponent } from './serie/serie.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthService } from './auth/auth.service';
import { SerieService } from './serie/serie.service';
import { EpisodeService } from './episode/episode.service';
import { DataStorageService } from '../data-storage.service';
import { SeasonService} from './season/season.service';

import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';
import { ListeSerieComponent } from './serie/liste-serie/liste-serie.component';
import { BlocSerieComponent } from './serie/bloc-serie/bloc-serie.component';
import { DisplayEpisodeComponent } from './episode/display-episode/display-episode.component';
import { DisplaySerieComponent } from './serie/display-serie/display-serie.component';
import { BlocEpisodeComponent } from './season/bloc-episode/bloc-episode.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpModule
  ],
  declarations: [
    SerieComponent,
    CallbackComponent,
    SeasonComponent,
    EpisodeComponent,
    ListeSerieComponent,
    BlocSerieComponent,
    DisplayEpisodeComponent,
    DisplaySerieComponent,
    BlocEpisodeComponent
  ],
  providers: [
    SerieService,
    SeasonService,
    EpisodeService,
    AuthService,
    DataStorageService,
  ],
  exports: [
    ListeSerieComponent,
    BlocSerieComponent,
    DisplayEpisodeComponent,
    DisplaySerieComponent
  ]
})
export class SharedModule {
    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }
}
