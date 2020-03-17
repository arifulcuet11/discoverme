import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatagoryModule } from './catagory/catagory.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { httpInterceptProviders } from './share/intercept';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule 
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
