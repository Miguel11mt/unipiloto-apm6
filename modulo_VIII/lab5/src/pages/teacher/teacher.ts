import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddteacherPage } from '../addteacher/addteacher';
import {ModalController} from 'ionic-angular';
/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(AddteacherPage);
    profileModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherPage');
  }

}
