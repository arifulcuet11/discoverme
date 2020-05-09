import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchContentComponent } from './search-content/search-content/search-content.component';

const routes: Routes = [
   { path: 'search', component: SearchContentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeRoutingModule { }