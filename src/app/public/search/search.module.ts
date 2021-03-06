import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module';
import { PublicModule } from '../public.module';

import { SearchComponent } from './search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    PublicModule
  ],
  declarations: [
    SearchComponent,
    SearchBarComponent
  ],
  providers: []
})
export class SearchModule { }
