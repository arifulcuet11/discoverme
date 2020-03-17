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



@NgModule({
  declarations: [CatagoryComponent],
  imports: [
    CommonModule,
    CatagoryRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    MatCardModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CatagoryModule { }
