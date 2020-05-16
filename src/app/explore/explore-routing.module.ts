import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
   { path: '', component: ExploreComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ExploreRoutingModule { }
