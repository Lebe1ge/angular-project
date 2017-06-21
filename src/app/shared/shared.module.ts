import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';



import { SerieComponent } from './serie/serie.component';
import { AuthService } from './auth/auth.service';
import { SerieService } from './serie/serie.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    SerieComponent,
    SerieService
  ],
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
