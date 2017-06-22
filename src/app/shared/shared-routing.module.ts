import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocSerieComponent } from './serie/bloc-serie/bloc-serie.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
