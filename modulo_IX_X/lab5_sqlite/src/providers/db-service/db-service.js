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
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SQLite } from "@ionic-native/sqlite";
import { Platform } from "ionic-angular";
var DbServiceProvider = /** @class */ (function () {
    function DbServiceProvider(platform, sqlite) {
        var _this = this;
        this.platform = platform;
        this.sqlite = sqlite;
        this.dbReady = new BehaviorSubject(false);
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'data.db',
                location: 'default'
            })
                .then(function (db) {
                _this.database = db;
                _this.createTable()
                    .then(function () {
                    _this.dbReady.next(true);
                })
                    .catch(function (err) { return console.error("error detected creating tables: ", err); });
            });
        });
    }
    DbServiceProvider.prototype.createTable = function () {
        return this.database.executeSql("CREATE TABLE IF NOT EXISTS products (\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\n        name TEXT\n      );", {})
            .then(function (result) {
            console.debug(result);
        })
            .catch(function (err) { return console.error("error detected creating tables: ", err); });
    };
    DbServiceProvider.prototype.isReady = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.dbReady.getValue()) {
                resolve();
            }
            else {
                _this.dbReady.subscribe(function (ready) {
                    if (ready)
                        resolve();
                });
            }
        });
    };
    DbServiceProvider.prototype.getProducts = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM products", [])
                .then(function (data) {
                var products = [];
                for (var i = 0; i < data.rows.length; i++) {
                    products.push(data.rows.item(i));
                }
                return products;
            })
                .catch(function (err) { return console.error(err); });
        })
            .catch(function (err) { return console.error("not ready: ", err); });
    };
    DbServiceProvider.prototype.getProduct = function (id) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM products WHERE id = " + id, [])
                .then(function (data) {
                if (data.rows.length)
                    return data.rows.item(0);
                return null;
            })
                .catch(function (err) { return console.error(err); });
        })
            .catch(function (err) { return console.error(err); });
    };
    DbServiceProvider.prototype.UpdateProduct = function (id, name) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("UPDATE products SET name='" + name + "' WHERE  id = " + id + "';", {})
                .then(function (result) {
                if (result.insertId)
                    return _this.getProduct(result.insertId);
            })
                .catch(function (err) { return console.error(err); });
        });
        /*return this.isReady()
          .then(() => {
            return this.database.executeSql(`UPDATE products SET name='${name}' WHERE  id = ${id}`, [])
              .then(data => {
                if(data.rows.length) return data.rows.item(0);
                return null;
              })
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));*/
    };
    DbServiceProvider.prototype.addProduct = function (name) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("INSERT INTO products(name) VALUES ('" + name + "');", {})
                .then(function (result) {
                if (result.insertId)
                    return _this.getProduct(result.insertId);
            })
                .catch(function (err) { return console.error(err); });
        });
    };
    DbServiceProvider.prototype.deleteProduct = function (id) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("DELETE FROM products WHERE id = " + id, []);
        })
            .catch(function (err) { return console.error(err); });
    };
    DbServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Platform, SQLite])
    ], DbServiceProvider);
    return DbServiceProvider;
}());
export { DbServiceProvider };
//# sourceMappingURL=db-service.js.map