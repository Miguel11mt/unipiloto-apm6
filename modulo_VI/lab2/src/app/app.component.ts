import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./services/auth.service";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
export class AppComponent {
  public user: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      user => this.user = user);
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}*/

export class AppComponent {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
