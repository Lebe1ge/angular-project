import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
  ]
})
export class PublicModule { }
