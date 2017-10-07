import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceProvider} from "../../providers/product-service/product-service";
/**
 * Generated class for the EditProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-product',
  templateUrl: 'edit-product.html',
})
export class EditProductPage {
  myForm2: FormGroup;

  public product: {name: string, id: number} = {name: '', id: 0};
  private id: number = null;
  constructor(public viewCtrl: ViewController,
  	          public navCtrl: NavController,
              public formBuilder: FormBuilder, 
  	          public navParams: NavParams, 
  	          private productServiceProvider: ProductServiceProvider) {

  	this.myForm2 = this.createForm();

    this.id = parseInt(navParams.get('id'));
    if (this.id) {
      this.productServiceProvider.getProduct(this.id)
        .then(result => {
          console.debug(result);
          this.product = result;
        })
        .catch(err=>console.error("error update product: ", err));
    }
  }

  private createForm() {
    return this.formBuilder.group({
        id: [this.product.id, Validators.required],
    	name: [this.product.name, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
    });
  }

  public saveForm() {
    this.productServiceProvider.UpdateProduct(this.myForm2.value.id, this.myForm2.value.name )
      .then(result => {
        console.debug(result);
        this.dismiss();
      })
      .catch(err=>console.error("error create product: ", err));
  }

  public dismiss() {
    let data = {};
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProductPage');
  }

}
