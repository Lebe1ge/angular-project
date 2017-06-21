import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {Http} from '@angular/http';

import { SerieComponent } from './serie/serie.component';
import { AuthService } from './auth/auth.service';
import { SerieService } from './serie/serie.service';
import {CallbackComponent} from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    SerieComponent,
    CallbackComponent,
  ],
  providers: [
    SerieService,
    AuthService,
    Http
  ],
})
export class SharedModule {
    constructor(public auth: AuthService) {
        auth.handleAuthentication();
    }
}
