import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  routePrefix = '/api/MobileToken';
  constructor(private fcm: FCM, private http: HttpClient) { }
  getDeviceToken(){
    this.fcm.getToken().then(token => {
      const model = {
        deviceToken: token,
      };
      this.http.post(this.routePrefix + '/add', model).subscribe(res => {
      });
    });
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
      };
      this.http.post(this.routePrefix + '/add', model).subscribe(res => {
      });
    });
  }
}

