import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentViewRoutingModule } from './content-view-routing.module';
import { ContentViewItemsComponent } from './content-view-items/content-view-items.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContentViewItemsComponent],
  imports: [
    IonicModule,
    ContentViewRoutingModule,
    RouterModule
  ],
})
export class ContentViewModule { }
