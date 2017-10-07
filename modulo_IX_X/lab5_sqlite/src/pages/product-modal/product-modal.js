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
import { IonicPage, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { ProductServiceProvider } from "../../providers/product-service/product-service";
var ProductModalPage = /** @class */ (function () {
    function ProductModalPage(viewCtrl, formBuilder, productServiceProvider) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.productServiceProvider = productServiceProvider;
        this.myForm = this.createForm();
    }
    ProductModalPage.prototype.createForm = function () {
        return this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
        });
    };
    ProductModalPage.prototype.saveForm = function () {
        var _this = this;
        this.productServiceProvider.addProduct(this.myForm.value.name)
            .then(function (result) {
            console.debug(result);
            _this.dismiss();
        })
            .catch(function (err) { return console.error("error create product: ", err); });
    };
    ProductModalPage.prototype.dismiss = function () {
        var data = {};
        this.viewCtrl.dismiss(data);
    };
    ProductModalPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-product-modal',
            templateUrl: 'product-modal.html',
        }),
        __metadata("design:paramtypes", [ViewController,
            FormBuilder,
            ProductServiceProvider])
    ], ProductModalPage);
    return ProductModalPage;
}());
export { ProductModalPage };
//# sourceMappingURL=product-modal.js.map