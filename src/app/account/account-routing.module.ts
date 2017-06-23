import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MySeriesComponent } from './my-series/my-series.component';
import { AuthService } from './../shared/auth/auth.service';

const routes: Routes = [
    { path: 'my-profile', component: ProfileComponent, canActivate: [AuthService]},
    { path: 'my-series', component: MySeriesComponent, canActivate: [AuthService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
