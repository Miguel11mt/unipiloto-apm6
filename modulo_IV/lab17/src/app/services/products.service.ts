import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

  private productsURI = 'http://localhost:3000/api/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsURI)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  /*getProducts(): Promise<Product[]>{
    return Promise.resolve(PRODUCTS);
  }*/

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }


  update(product: Product): Promise<Product> {
    const url = `${this.productsURI}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  create(name: string): Promise<Product> {

    return this.http
      .post(this.productsURI, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {PRODUCTS} from "../mocks/product-mock";

@Injectable()
export class ProductsService {

  getProducts(): Promise<Product[]>{
    return Promise.resolve(PRODUCTS);
  }

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }

}
*/