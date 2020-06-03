import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/share/services/notification/notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  generals: any = [];
  usersNotifications: any = [];
  constructor(private notificationService: NotificationService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {}

}
