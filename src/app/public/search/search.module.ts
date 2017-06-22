import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {ListeSerieComponent} from '../../shared/serie/liste-serie/liste-serie.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
      SharedModule
  ],
  declarations: [
    SearchComponent,
    SearchBarComponent,
    ListeSerieComponent
  ],
  providers: []
})
export class SearchModule { }
