import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MySeriesComponent } from './my-series/my-series.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
  ],
  declarations: [ProfileComponent, MySeriesComponent]
})
export class AccountModule { }
