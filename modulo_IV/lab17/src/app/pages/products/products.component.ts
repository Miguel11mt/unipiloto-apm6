import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: string = "los productos del Año";

  selected: Product;

  products: Product[];

  constructor(private router: Router, private productsService: ProductsService) {

  }

  getProducts() {
    this.productsService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product){
    this.selected = product;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productsService.create(name)
      .then(product => {
        this.products.push(product);
        this.selected = null;
      })
      .catch(error => console.error(error));
  }

  gotoDetail(): void {
    this.router.navigate(['product/detail/', this.selected.id]);
  }

}
