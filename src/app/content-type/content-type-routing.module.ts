import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentTypeComponent } from './content-type.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { SubCatagoryComponent } from './sub-catagory/sub-catagory.component';
import { ArrayFilterPipe } from '../share/pipe/array-filter';

const routes: Routes = [
   { path: 'type/:id/:name', component: ContentTypeComponent },
];

@NgModule({
  declarations: [ContentTypeComponent, SubCatagoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    IonicModule,
    RouterModule,
    NgMatModule,
    
  ],
  entryComponents: [SubCatagoryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentTypeRoutingModule { }
