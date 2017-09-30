import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StudentPage } from '../pages/student/student';
import { TeacherPage } from '../pages/teacher/teacher';
import { AddstudentPage } from '../pages/addstudent/addstudent';
<<<<<<< HEAD
import { AddteacherPage } from '../pages/addteacher/addteacher';
import { SearchPage } from '../pages/search/search';
=======
>>>>>>> origin/master

import {IonicStorageModule} from "@ionic/storage";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StudentPage,
    TeacherPage,
<<<<<<< HEAD
    AddstudentPage,
    AddteacherPage,
    SearchPage
=======
    AddstudentPage
>>>>>>> origin/master

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name:'__my_from_db',
      driverOrder:['websql', 'indexeddb', 'sqlite']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StudentPage,
    TeacherPage,
<<<<<<< HEAD
    AddstudentPage,
    AddteacherPage,
    SearchPage
=======
    AddstudentPage
>>>>>>> origin/master
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}