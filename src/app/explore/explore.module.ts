import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { IonicModule } from '@ionic/angular';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { MemComponent } from './mem/mem.component';
import { MemListComponent } from './mem/mem-list/mem-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ExploreComponent, MemComponent, MemListComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    IonicModule,
    FormsModule,
    NgMatModule,
    RouterModule
  ]
})
export class ExploreModule { }
