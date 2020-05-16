import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { IonicModule } from '@ionic/angular';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { MemComponent } from './mem/mem.component';



@NgModule({
  declarations: [ExploreComponent, MemComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    IonicModule,
    NgMatModule
  ]
})
export class ExploreModule { }
