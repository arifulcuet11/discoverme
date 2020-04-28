import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ContentViewItemsComponent } from './content-view-items/content-view-items.component';

const routes: Routes = [
   { path: 'view/:id', component: ContentViewItemsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ContentViewRoutingModule { }
