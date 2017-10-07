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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from "../../providers/product-service/product-service";
var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, productServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productServiceProvider = productServiceProvider;
        this.product = { name: '', id: 0 };
        this.id = null;
        this.id = parseInt(navParams.get('id'));
        if (this.id) {
            this.productServiceProvider.getProduct(this.id)
                .then(function (result) {
                console.debug(result);
                _this.product = result;
            })
                .catch(function (err) { return console.error("error create product: ", err); });
        }
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailPage');
    };
    ProductDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-product-detail',
            templateUrl: 'product-detail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProductServiceProvider])
    ], ProductDetailPage);
    return ProductDetailPage;
}());
export { ProductDetailPage };
//# sourceMappingURL=product-detail.js.map