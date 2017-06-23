import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

import { SerieService } from './serie/serie.service';
import { EpisodeService } from './episode/episode.service';
import { SeasonService} from './season/season.service';

import { HomeComponent } from './home/home.component';
import { SerieComponent } from './serie/serie.component';
import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';
import { ListeSerieComponent } from './serie/liste-serie/liste-serie.component';
import { BlocSerieComponent } from './serie/bloc-serie/bloc-serie.component';
import { DisplayEpisodeComponent } from './episode/display-episode/display-episode.component';
import { DisplaySerieComponent } from './serie/display-serie/display-serie.component';
import { BlocEpisodeComponent } from './season/bloc-episode/bloc-episode.component';
import { SerieBannerComponent } from './serie/serie-banner/serie-banner.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    SerieComponent,
    DisplaySerieComponent,
    ListeSerieComponent,
    BlocSerieComponent,
    SeasonComponent,
    SerieBannerComponent,
    EpisodeComponent,
    DisplayEpisodeComponent,
    BlocEpisodeComponent
  ],
  providers: [
    SerieService,
    SeasonService,
    EpisodeService
  ],
  exports: [
    HomeComponent,
    SerieComponent,
    DisplaySerieComponent,
    ListeSerieComponent,
    BlocSerieComponent,
    SeasonComponent,
    SerieBannerComponent,
    EpisodeComponent,
    DisplayEpisodeComponent,
    BlocEpisodeComponent
  ]
})
export class PublicModule { }
