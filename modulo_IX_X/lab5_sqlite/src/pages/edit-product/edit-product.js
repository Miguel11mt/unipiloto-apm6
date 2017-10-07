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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { ProductServiceProvider } from "../../providers/product-service/product-service";
/**
 * Generated class for the EditProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProductPage = /** @class */ (function () {
    function EditProductPage(viewCtrl, navCtrl, formBuilder, navParams, productServiceProvider) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.productServiceProvider = productServiceProvider;
        this.product = { name: '', id: 0 };
        this.id = null;
        this.myForm2 = this.createForm();
        this.id = parseInt(navParams.get('id'));
        if (this.id) {
            this.productServiceProvider.getProduct(this.id)
                .then(function (result) {
                console.debug(result);
                _this.product = result;
            })
                .catch(function (err) { return console.error("error update product: ", err); });
        }
    }
    EditProductPage.prototype.createForm = function () {
        return this.formBuilder.group({
            id: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
            name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
        });
    };
    EditProductPage.prototype.saveForm = function () {
        var _this = this;
        this.productServiceProvider.UpdateProduct(this.myForm2.value.id, this.myForm2.value.name)
            .then(function (result) {
            console.debug(result);
            _this.dismiss();
        })
            .catch(function (err) { return console.error("error create product: ", err); });
    };
    EditProductPage.prototype.dismiss = function () {
        var data = {};
        this.viewCtrl.dismiss(data);
    };
    EditProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProductPage');
    };
    EditProductPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-product',
            templateUrl: 'edit-product.html',
        }),
        __metadata("design:paramtypes", [ViewController,
            NavController,
            FormBuilder,
            NavParams,
            ProductServiceProvider])
    ], EditProductPage);
    return EditProductPage;
}());
export { EditProductPage };
//# sourceMappingURL=edit-product.js.map