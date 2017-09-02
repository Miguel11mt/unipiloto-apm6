import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  //products: Product[];

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  
 /*getProducts() {
    this.productsService.getProducts().then(products => this.products = products);
  }*/



  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productService.getProduct(id)
        .then(product => this.product = product);
    });
  }

 /*act(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.update(name)
      .then(product => {
        this.products.push(product);
        this.selected = null;
      })
      .catch(error => console.error(error));
  }*/

}
