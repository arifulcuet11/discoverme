import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { HttpClient } from '@angular/common/http';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  routePrefix = '/api/MobileToken';
  constructor(private fcm: FCM, private http: HttpClient, private uniqueDeviceID: UniqueDeviceID) { }
  getDeviceToken() {
    this.fcm.getToken().then(token => {
      const model = {
        deviceToken: token,
        deviceId: null
      };
      this.http.post(this.routePrefix + '/add', model).subscribe(res => {
      });
    });
  }

  private getDeviceId() {
    this.uniqueDeviceID.get()
    .then((uuid: any) => {
      return uuid;
    })
    .catch((error: any) => console.log(error));
  }
  getOnNotification() {
    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log('Received in background');
      } else {
        console.log('Received in foreground');
      }
    });
  }
  getRefreshToken() {
    this.fcm.onTokenRefresh().subscribe(token => {
      const model = {
        deviceToken: token,
        deviceId: this.getDeviceId()
      };
      this.http.post(this.routePrefix + '/add', model).subscribe(res => {
      });
    });
  }
}

