import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddstudentPage} from "../addstudent/addstudent";
import {ModalController} from 'ionic-angular';

/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  selectedItem: any;
  items: Array<{first_name: string, last_name: string, nid: number, profession: string}>;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.selectedItem = navParams.get('item');
    this.items = [
    {
    first_name: "Armando Lopez Fabregas",
    last_name: "Samsung galaxy 8",
    nid: 545456457,
    profession: "smartphone"
  },
  {
    first_name: "Miguel  Espejo",
    last_name: "Samsung galaxy 8",
    nid: 545456457,
    profession: "smartphone"
  },
  {
    first_name: "Esteban Carpa",
    last_name: "Samsung galaxy 8",
    nid: 545456457,
    profession: "smartphone"
  }
  ];

  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(AddstudentPage);
    profileModal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

}