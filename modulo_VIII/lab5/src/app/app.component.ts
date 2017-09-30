import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StudentPage } from '../pages/student/student';
import { TeacherPage } from '../pages/teacher/teacher';
import { AddstudentPage } from '../pages/addstudent/addstudent';
<<<<<<< HEAD
import { SearchPage } from '../pages/search/search';
=======
>>>>>>> origin/master

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
<<<<<<< HEAD
      { icon: 'home', title: 'Home', component: HomePage },
      { icon: 'list', title: 'List', component: ListPage },
      { icon: 'person', title: 'Student', component: StudentPage },
      { icon: 'people', title: 'Teachers', component: TeacherPage },
      { icon: 'person-add', title: 'Add student', component: AddstudentPage },
      { icon: 'search', title: 'Search', component: SearchPage }
=======
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Student', component: StudentPage },
      { title: 'Teacher', component: TeacherPage },
      { title: 'Add student', component: AddstudentPage }
>>>>>>> origin/master
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}