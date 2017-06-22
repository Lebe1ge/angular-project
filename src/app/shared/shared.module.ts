import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {Http} from '@angular/http';

import { SerieComponent } from './serie/serie.component';
import {CallbackComponent} from './callback/callback.component';

import { AuthService } from './auth/auth.service';
import { SerieService } from './serie/serie.service';
import { DataStorageService } from '../data-storage.service';

import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  declarations: [
    SerieComponent,
    CallbackComponent,
    SeasonComponent,
    EpisodeComponent,
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
