var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ProductServiceProvider } from "../../providers/product-service/product-service";
import { EditProductPage } from "../edit-product/edit-product";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, productService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.productService = productService;
    }
    HomePage.prototype.itemSelected = function (item) {
        this.navCtrl.push(EditProductPage, { id: item.id });
    };
    HomePage.prototype.addProductModal = function () {
        var uppProductModal = this.modalCtrl.create(EditProductPage, {});
        addProductModal.onDidDismiss(function (data) {
            console.log(data);
        });
        addProductModal.present();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            ModalController,
            ProductServiceProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map