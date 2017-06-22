import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ShowEpisodeComponent } from './show-episode/show-episode.component';
import { ShowSerieComponent } from './show-serie/show-serie.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ShowEpisodeComponent,
    ShowSerieComponent
  ]
})
export class PublicModule { }
