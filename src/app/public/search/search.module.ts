import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SearchComponent,
    SearchBarComponent
  ]
})
export class SearchModule { }
