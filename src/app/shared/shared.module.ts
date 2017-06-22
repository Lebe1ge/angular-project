import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';



import { SerieComponent } from './serie/serie.component';
import { AuthService } from './auth/auth.service';
import { SerieService } from './serie/serie.service';
import {CallbackComponent} from "./callback/callback.component";
import { ListeSerieComponent } from './serie/liste-serie/liste-serie.component';
import { BlocSerieComponent } from './serie/bloc-serie/bloc-serie.component';
import { BlocSeasonsComponent } from './serie/bloc-seasons/bloc-seasons.component';
import { BlocEpisodeComponent } from './serie/bloc-episode/bloc-episode.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    SerieComponent,
    CallbackComponent,
    ListeSerieComponent,
    BlocSerieComponent,
    BlocSeasonsComponent,
    BlocEpisodeComponent
  ],
  providers: [
      SerieService,
      AuthService
  ],
})
export class SharedModule {
    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }
}
