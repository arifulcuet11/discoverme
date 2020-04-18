import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { NgMatModule } from '../share/ngMat/ngMat.module';



@NgModule({
  declarations: [DashboardComponent, DashboardMenuComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgMatModule
  ],
  entryComponents: [DashboardMenuComponent]
})
export class DashboardModule { }