import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfileDetailPage } from '../pages/profile-detail/profile-detail';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { LoginDetailPage } from '../pages/login-detail/login-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbServiceProvider } from '../providers/db-service/db-service';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfileDetailPage,
    ProductDetailPage,
    LoginDetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfileDetailPage,
    ProductDetailPage,
    LoginDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbServiceProvider,
    ProfileServiceProvider
  ]
})
export class AppModule {}
