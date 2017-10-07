var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DbServiceProvider } from "../db-service/db-service";
var ProductServiceProvider = /** @class */ (function () {
    function ProductServiceProvider(database) {
        this.database = database;
        this.getProducts();
    }
    ProductServiceProvider.prototype.addProduct = function (name) {
        var _this = this;
        return this.database.addProduct(name)
            .then(function (list) {
            return _this.getProducts()
                .then(function () {
                return list;
            })
                .catch(function (err) { return console.error("error create product: ", err); });
        });
    };
    ProductServiceProvider.prototype.UpdateProduct = function (id, name) {
        var _this = this;
        return this.database.UpdateProduct(id, name)
            .then(function (list) {
            return _this.getProducts()
                .then(function () {
                return list;
            })
                .catch(function (err) { return console.error("error create product: ", err); });
        });
    };
    ProductServiceProvider.prototype.getProducts = function () {
        var _this = this;
        return this.database.getProducts()
            .then(function (data) {
            var listProducts = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    listProducts.push(item);
                }
            }
            _this.listProducts = listProducts;
        })
            .catch(function (err) { return console.error("error list of products: ", err); });
    };
    ProductServiceProvider.prototype.getProduct = function (id) {
        return this.database.getProduct(id)
            .then(function (data) {
            return data;
        })
            .catch(function (err) { return console.error("error list of products: ", err); });
    };
    ProductServiceProvider.prototype.removeProduct = function (products) {
        var _this = this;
        return this.database.deleteProduct(products.id)
            .then(function () {
            return _this.getProducts();
        })
            .catch(function (err) { return console.error("error remove product: ", err); });
    };
    ProductServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DbServiceProvider])
    ], ProductServiceProvider);
    return ProductServiceProvider;
}());
export { ProductServiceProvider };
//# sourceMappingURL=product-service.js.map