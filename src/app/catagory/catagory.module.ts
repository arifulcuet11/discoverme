import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatagoryRoutingModule } from './catagory-routing.module';
import { CatagoryComponent } from './catagory.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CatagoryComponent],
  imports: [
    CommonModule,
    CatagoryRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class CatagoryModule { }
