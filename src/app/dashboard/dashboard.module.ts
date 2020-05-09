import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DailogEditInfoComponent } from './edit-profile/dailog-edit-info/dailog-edit-info.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { DailogEidtContactComponent } from './edit-profile/dailog-eidt-contact/dailog-eidt-contact.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMenuComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    DailogEditInfoComponent,
    DailogEidtContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgMatModule,
  ],
  entryComponents: [DashboardMenuComponent, DailogEditInfoComponent, DailogEidtContactComponent],
  providers:[
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ]
})
export class DashboardModule { }
