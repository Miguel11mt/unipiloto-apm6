import { Component } from '@angular/core';

export class Vehicle {
  bland: string;
  model: string;
  color: string;
  plate: string;
  capcity: number;

  constructor(bland: string, model: string, color: string, plate: string, capcity: number) {
    this.bland = bland;
    this.model = model;
    this.color = color;
    this.plate = plate;
    this.capcity = capcity;
  }
}

export class Driver extends Vehicle {
  id: number;
  license: number;
  first_name: string;
  last_name: string;
  age: number;

  constructor(bland: string, model: string, color: string, plate: string, capcity: number, id: number, license: number, first_name: string, last_name: string, age: number) {

    super(bland, model, color, plate, capcity);

    this.id = id;
    this.license = license;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title1: string = "Lista de vehiculos";

  selected1: Vehicle;

  vehicles: Vehicle[] = VEHICLE;

  onSelect1(vehicle: Driver) {
    this.selected1 = vehicle;
  }


  title2: string = "Detalle de vehiculos";

  selected2: Vehicle;

  details: Vehicle[] = VEHICLE;

  onSelect2(detail: Driver) {
    this.selected2 = detail;
  }


  title3: string = "Propietarios del vehiculo";

  selected3: Driver;

  drivers: Driver[] = DRIVERS;

  onSelect3(driver: Driver) {
    this.selected3 = driver;
  }
}

const VEHICLE: Vehicle[] = [
  {
    bland: "Mercedez",
    model: "2017", 
    color: "azul",
    plate: "Petro",
    capcity: 34,
  },
  {
    bland: "Audi",
    model: "2017", 
    color: "azul",
    plate: "Petro",
    capcity: 34,
  },
  {
    bland: "BMW",
    model: "2017", 
    color: "azul",
    plate: "Petro",
    capcity: 34,
  }
];

const DRIVERS: Driver[] = [
  {
    bland: "Mercedez",
    model: "2017", 
    color: "azul",
    plate: "Petro",
    capcity: 34,
    id: 545422256,
    license: 656546,
    first_name: "Miguel",
    last_name: "Espejo",
    age: 13
  },
  {
    bland: "Audi",
    model: "2017", 
    color: "azul",
    plate: "Petro",
    capcity: 34,
    id: 545422256,
    license: 656546,
    first_name: "Miguel",
    last_name: "Espejo",
    age: 13
  },
  {
    bland: "BMW",
    model: "2017", 
    color: "azul",
    plate: "Petro",
    capcity: 34,
    id: 333,
    license: 656546,
    first_name: "Miguel",
    last_name: "Espejo",
    age: 13
  }
];