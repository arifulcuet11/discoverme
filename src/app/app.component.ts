import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './share/services/login/auth.service';
import { StorageService } from './share/services/storage/storage.service';
import { CommunicationService } from './share/services/communication/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  showBottomNav: any;
  loginLogout: any;
  isBottomBarShow: any = true;
  isUserLogin = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private storageService: StorageService,
    private communicationService: CommunicationService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    setTimeout(() => {
      this.authService.checkToken().subscribe(res => {
        this.storageService.setItem(this.storageService.IsLogin, true);
        this.isUserLogin = true;
      }, (err) => {
          this.storageService.setItem(this.storageService.IsLogin, false);
      });
    }, 1000);

 
    this.showBottomNav = this.communicationService.showTopnavigationBar.subscribe( res => {
             this.isBottomBarShow = res;
          });
    this.loginLogout = this.communicationService.loginLogoutInfo.subscribe( res => {
            this.isUserLogin = res;
         });
   }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#ffffff');
      }
      this.splashScreen.hide();
    });
  }
}
