import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptProviders } from './share/intercept';
import { HttpClientModule } from '@angular/common/http';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MenuComponent } from './left-menu/menu.component';
import { NgMatModule } from './share/ngMat/ngMat.module';
import { MenuBeforeSigninComponent } from './left-menu/menu-before-signin/menu-before-signin.component';
import { DailogLanguageComponent } from './left-menu/dailog-language/dailog-language.component';
import { FormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuBeforeSigninComponent,
    DailogLanguageComponent,
  ],
  entryComponents: [
    MenuComponent,
    MenuBeforeSigninComponent,
    DailogLanguageComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlideshowModule,
    NgMatModule,
    RouterModule,
    FormsModule,
    SuperTabsModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Camera,
    FCM,
    UniqueDeviceID ,
    PhotoViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
