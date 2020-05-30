import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { GeneralNotificationComponent } from './general-notification/general-notification.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { PipeModule } from '../share/pipe/pipe.module';
import { NgMatModule } from '../share/ngMat/ngMat.module';



@NgModule({
  declarations: [
    NotificationComponent,
    GeneralNotificationComponent,
    UserNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    PipeModule,
    NgMatModule
  ]
})
export class NotificationModule { }
