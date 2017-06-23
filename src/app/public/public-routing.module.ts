import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SeasonComponent } from './season/season.component';
import { DisplayEpisodeComponent } from './episode/display-episode/display-episode.component';
import { DisplaySerieComponent } from './serie/display-serie/display-serie.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'search',
    component: SearchComponent,
  },
  { path: 'serie/:serieId',
    component: DisplaySerieComponent,
  },
  { path: 'episode/:episodeId',
    component: DisplayEpisodeComponent,
  },
  {
    path: 'season/:serieId/:season',
    component: SeasonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
