import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MySeriesComponent } from './my-series/my-series.component';

const routes: Routes = [
    { path: 'my-profile', component: ProfileComponent },
    { path: 'my-series', component: MySeriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
