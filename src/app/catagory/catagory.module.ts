import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatagoryRoutingModule } from './catagory-routing.module';
import { CatagoryComponent } from './catagory.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SubCatagoryComponent } from './sub-catagory/sub-catagory.component';
import { MatInputModule } from '@angular/material/input';
import { ArrayFilterPipe } from '../share/pipe/array-filter';



@NgModule({
  declarations: [CatagoryComponent, SubCatagoryComponent, ArrayFilterPipe],
  imports: [
    CommonModule,
    CatagoryRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    MatCardModule,
    RouterModule ,
    MatInputModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CatagoryModule { }
