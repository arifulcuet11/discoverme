import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { ArrayFilterPipe } from '../share/pipe/array-filter';
import { ContentTypeRoutingModule } from './content-type-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentTypeModule {}
