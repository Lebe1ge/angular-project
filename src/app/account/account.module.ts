import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MySeriesComponent } from './my-series/my-series.component';
import { SharedModule } from '../shared/shared.module';
import { MySerieOutputComponent } from './my-series/my-serie-output/my-serie-output.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    MySeriesComponent,
    MySerieOutputComponent
  ]
})
export class AccountModule { }
