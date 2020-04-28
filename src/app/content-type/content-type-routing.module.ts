import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentTypeComponent } from './content-type.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { SubCatagoryComponent } from './sub-catagory/sub-catagory.component';
import { ArrayFilterPipe } from '../share/pipe/array-filter';
import { ContentItemsComponent } from './content-items/content-items.component';
import { DailogFilterContentTypeComponent } from './dailog-filter-content-type/dailog-filter-content-type.component';

const routes: Routes = [
   { path: 'type/:id/:name', component: ContentTypeComponent },
   { path: 'sub-type/:id/:name', component: ContentItemsComponent },
];

@NgModule({
  declarations: [
    ContentTypeComponent,
     SubCatagoryComponent,
     ContentItemsComponent,
     DailogFilterContentTypeComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    IonicModule,
    RouterModule,
    NgMatModule,
  ],
  entryComponents: [SubCatagoryComponent,DailogFilterContentTypeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentTypeRoutingModule { }
