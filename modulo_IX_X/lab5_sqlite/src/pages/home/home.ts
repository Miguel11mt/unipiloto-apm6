import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ProductServiceProvider} from "../../providers/product-service/product-service";
import {ProductModalPage} from "../product-modal/product-modal";
import {EditProductPage} from "../edit-product/edit-product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public productService: ProductServiceProvider) {
  }

  public itemSelected(item: any) {
    this.navCtrl.push(EditProductPage, {id: item.id});
  }

  public addProductModal() {
    let addProductModal = this.modalCtrl.create(ProductModalPage, {});
    addProductModal.onDidDismiss(data => {
      console.log(data);
    });
    addProductModal.present();
  }
}
