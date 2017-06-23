import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HttpModule } from '@angular/http';

import { CallbackComponent } from './callback/callback.component';

import { AuthService } from './auth/auth.service';
import { DataStorageService } from '../data-storage.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpModule
  ],
  declarations: [
    CallbackComponent,
  ],
  providers: [
    AuthService,
    DataStorageService,
  ],
  exports: [

  ]
})
export class SharedModule {
    constructor(public auth: AuthService ) {
        auth.handleAuthentication();
    }
}
