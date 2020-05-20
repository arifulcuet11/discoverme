import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { MemListComponent } from './mem/mem-list/mem-list.component';

const routes: Routes = [
   { path: '', component: ExploreComponent },
   { path: 'mem/type/:id/:name', component: MemListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ExploreRoutingModule { }
