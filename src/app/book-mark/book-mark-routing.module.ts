import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookMarkComponent } from './book-mark/book-mark.component';

const routes: Routes = [
   { path: '', component: BookMarkComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),

  ],
})
export class BookMarkRoutingModule { }
