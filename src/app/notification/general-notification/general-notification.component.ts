import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/share/services/notification/notification.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-general-notification',
  templateUrl: './general-notification.component.html',
  styleUrls: ['./general-notification.component.scss'],
})
export class GeneralNotificationComponent implements OnInit {
  generals: any = [];
  index: any = 0;
  size: any = 10;
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  constructor(private notificationService: NotificationService,
              private photoViewer: PhotoViewer ) { }

  ngOnInit() {
    this.getGeneral();
  }

  getGeneral() {
    this.notificationService.general(this.index, this.size).subscribe(res => {
      this.generals = res.notifications;
    });
  }
  doRefresh(event) {
    event.target.complete();
    this.index = 0;
    this.size = 10;
    this.getGeneral();
}
loadData(event) {
  setTimeout(() => {
    event.target.complete();
    this.index = this.index + 1;
    this.size = 10;
    this.getGeneral();
    if (this.generals.length === 1) {
      event.target.disabled = true;
    }
  }, 500);
}
toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}
viewPhoto(item: any) {
  this.photoViewer.show(item.imageUrl, item.title, {share: true});
}
}
