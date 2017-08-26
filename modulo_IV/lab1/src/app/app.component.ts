import { Component } from '@angular/core';

export class Product {
  id: number;
  name: string;  
  description: string;
  type: string;
  price: number;
  quantity: number;

  constructor(id: number,name: string,description: string,type: string,price: number,quantity: number){
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.price = price;
    this.quantity = quantity;    
  }

  setId(id: number): void{
    this.id = id;
  }

  getId(): number{
    return this.id;
  }

  setName(name: string): void{
    this.name = name;
  }

  getName(): string{
    return this.name;
  }

  setDescription(description: string): void{
    this.description = description;
  }

  getDescription(): string{
    return this.description;
  }

   setType(type: string): void{
    this.type = type;
  }

  getType(): string{
    return this.type;
  }

  setPrice(price: number): void{
    this.price = price;
  }

  getPrice(): number{
    return this.price;
  }

  setQuantity(quantity: number): void{
    this.quantity = quantity;
  }


  getQuantity(): number{
    return this.quantity;
  }


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "El producto del Año";

  public product: Product = new (2,'Samsung galaxy 7','telefono que explota','smartphone',44,45);
 
  /*product: Product = {
    id: 2,
    name: "Samsung galaxy 7",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20,
  };*/
}
