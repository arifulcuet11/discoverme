import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/share/services/notification/notification.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  generals: any = [];
  usersNotifications: any = [];
  constructor(private notificationService: NotificationService,
              private communicationService: CommunicationService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.communicationService.showTopnavigationBar.emit(false);
    });
  }

}
