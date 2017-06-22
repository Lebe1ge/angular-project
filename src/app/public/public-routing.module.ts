import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DisplaySerieComponent } from './display-serie/display-serie.component';
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
    component: DisplaySerieComponent,
  },
  { path: 'episode/:episodeId',
    component: ShowEpisodeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
