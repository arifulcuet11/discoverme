import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NotificationService } from 'src/app/share/services/notification/notification.service';
import { LoadingService } from 'src/app/share/services/loader/loader.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.scss'],
})
export class UserNotificationComponent implements OnInit {
  users: any = [];
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  constructor(private notificationService: NotificationService,
              private loadingService: LoadingService,
              private photoViewer: PhotoViewer,
              private activeRouter: ActivatedRoute ) {}

  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.users = [];
      this.getUserNotification();
    });
    this.getUserNotification();
  }

  getUserNotification() {
    this.loadingService.loadingPresent();
    this.notificationService.user().subscribe((res) => {
      this.users = res;
      this.loadingService.loadingDismiss();
    }, err => {
      this.loadingService.loadingDismiss();
    });
  }
  doRefresh(event) {
    event.target.complete();
    this.getUserNotification();
  }
  viewPhoto(item: any) {
    this.photoViewer.show(item.imageUrl, item.title, {share: true});
  }
}
