import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AddstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudent',
  templateUrl: 'addstudent.html',
})
export class AddstudentPage {
   myForm: FormGroup;   

  constructor(public navCtrl: NavController, private storage: Storage, public formBuilder: FormBuilder) {
  	    this.myForm = this.createForm();
  }

   private createForm() {
    return this.formBuilder.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      last_name: ['', Validators.required]
    });
  }

   saveForm(){
  	this.storage.set('form', this.myForm.value);
  	this.storage.get('form')
  	.then(result => {
			console.log(result)})
  	.catch(error => console.error(error));
  }

}
