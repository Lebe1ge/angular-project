import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { AuthService } from './auth/auth.service';


import { SerieComponent } from './serie/serie.component';

import { SerieService } from './serie/serie.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [SerieComponent],
  providers: [
      SerieService,
      AuthService
  ],
})
export class SharedModule {
    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }
}
