import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
   { path: 'dash-board', component: DashboardComponent },
   { path: 'edit-profile', component: EditProfileComponent },
   { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardRoutingModule { }