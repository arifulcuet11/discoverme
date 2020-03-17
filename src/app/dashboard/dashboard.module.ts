import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }