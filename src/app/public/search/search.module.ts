import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {ListeSerieComponent} from '../../shared/serie/liste-serie/liste-serie.component';
import {BlocSerieComponent} from '../../shared/serie/bloc-serie/bloc-serie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SearchComponent,
    SearchBarComponent,
    ListeSerieComponent,
    BlocSerieComponent
  ],
  providers: []
})
export class SearchModule { }
