import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatagoryComponent } from './catagory.component';
import { SubCatagoryComponent } from './sub-catagory/sub-catagory.component';
import { ItemsViewComponent } from './sub-catagory/items-view/items-view.component';


const routes: Routes = [
   { path: 'catagory', component: CatagoryComponent },
   { path: 'subcatagory/:Id', component: SubCatagoryComponent },
   { path: 'subcatagory/item/:Id', component: ItemsViewComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class CatagoryRoutingModule { }
