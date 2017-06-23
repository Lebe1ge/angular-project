import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SeasonComponent } from '../shared/season/season.component';
import { ShowSerieComponent } from './show-serie/show-serie.component';
import { ShowEpisodeComponent } from './show-episode/show-episode.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'search',
    component: SearchComponent,
  },
  { path: 'serie/:serieId',
    component: ShowSerieComponent,
  },
  { path: 'episode/:episodeId',
    component: ShowEpisodeComponent,
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
