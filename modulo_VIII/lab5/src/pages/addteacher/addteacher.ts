import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddteacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addteacher',
  templateUrl: 'addteacher.html',
})
export class AddteacherPage {
	 myForm: FormGroup; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public formBuilder: FormBuilder) {
  	   this.myForm = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      last_name: ['', Validators.required],
      coursesphython: ['', Validators.required],
      coursescchar: ['', Validators.required],
      coursesphp: ['', Validators.required]  
    });
  }

  
   saveForm(){
  	this.storage.set('form', this.myForm.value);
  	this.storage.get('form')
  	.then(result => {
			console.log(result)})
  	.catch(error => console.error(error));
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AddteacherPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddteacherPage');
  }

}
