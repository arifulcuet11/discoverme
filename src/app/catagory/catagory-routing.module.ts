import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatagoryComponent } from './catagory.component';


const routes: Routes = [
  { path: ' ', component: CatagoryComponent },
  // { path: 'catagory', component: CatagoryComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class CatagoryRoutingModule { }
