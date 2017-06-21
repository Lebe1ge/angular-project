import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { SerieComponent } from './serie/serie.component';

import { SerieService } from './serie/serie.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [SerieComponent],
  providers: [
    SerieService
  ],
})
export class SharedModule { }
