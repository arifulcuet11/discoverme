import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentTypeComponent } from './content-type.component';
import { ContentItemsComponent } from './content-items/content-items.component';
import { ContentViewItemsComponent } from './content-view-items/content-view-items.component';

const routes: Routes = [
   { path: 'type/:id/:name', component: ContentTypeComponent },
   { path: 'sub-type/:id/:name', component: ContentItemsComponent },
   { path: 'view/:id', component: ContentViewItemsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),

  ],
})
export class ContentTypeRoutingModule { }
