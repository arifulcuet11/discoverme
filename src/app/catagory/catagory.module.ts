import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatagoryRoutingModule } from './catagory-routing.module';
import { CatagoryComponent } from './catagory.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { SubCatagoryComponent } from './sub-catagory/sub-catagory.component';
import { ArrayFilterPipe } from '../share/pipe/array-filter';
import { ItemsViewComponent } from './sub-catagory/items-view/items-view.component';

@NgModule({
  declarations: [
    CatagoryComponent,
    SubCatagoryComponent,
    ArrayFilterPipe,
    ItemsViewComponent
  ],
  imports: [
    CommonModule,
    CatagoryRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    NgMatModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatagoryModule {}
