import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMarkComponent } from './book-mark/book-mark.component';
import { BookMarkRoutingModule } from './book-mark-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { PipeModule } from '../share/pipe/pipe.module';
import { NgMatModule } from '../share/ngMat/ngMat.module';



@NgModule({
  declarations: [BookMarkComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookMarkRoutingModule,
    SuperTabsModule,
    PipeModule,
    NgMatModule
  ]
})
export class BookMarkModule { }
