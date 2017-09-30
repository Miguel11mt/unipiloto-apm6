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
   /*selectedItem: any;
   items:  Array<{check: string, check2: string}>;*/

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public formBuilder: FormBuilder) {
  	  
        /*this.selectedItem = navParams.get('item');
        this.items = [{check: '1',check2: '1'},{check: '1',check2: '1'},{check: '1',check2: '1'}];*/
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
    this.navCtrl.push(AddstudentPage, {
      item: item
    });
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

}