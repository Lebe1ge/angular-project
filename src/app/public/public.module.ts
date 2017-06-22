import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { DisplaySerieComponent } from './display-serie/display-serie.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  declarations: [
    HomeComponent,
    DisplaySerieComponent
  ]
})
export class PublicModule { }
