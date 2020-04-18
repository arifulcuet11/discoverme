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
import {SlideshowModule} from 'ng-simple-slideshow';
import { MenuComponent } from './left-menu/menu.component';
import { NgMatModule } from './share/ngMat/ngMat.module';
import { MenuBeforeSigninComponent } from './left-menu/menu-before-signin/menu-before-signin.component';
import { DailogLanguageComponent } from './left-menu/dailog-language/dailog-language.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MenuComponent, MenuBeforeSigninComponent, DailogLanguageComponent],
  entryComponents: [MenuComponent, MenuBeforeSigninComponent, DailogLanguageComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlideshowModule,
    NgMatModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
