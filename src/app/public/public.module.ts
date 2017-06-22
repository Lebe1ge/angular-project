import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { DisplaySerieComponent } from './display-serie/display-serie.component';
import { ShowEpisodeComponent } from './show-episode/show-episode.component';
import { DisplayEpisodeComponent } from '../shared/episode/display-episode/display-episode.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  declarations: [
    HomeComponent,
    DisplaySerieComponent,
    ShowEpisodeComponent,
    DisplayEpisodeComponent
  ]
})
export class PublicModule { }
