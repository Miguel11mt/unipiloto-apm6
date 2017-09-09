import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Product} from "../models/student";

export class InMemoryStudentService implements InMemoryDbService {
  createDb() {
    let student: Array<Product> = [
      {
        id: 1,
        name: "Samsung galaxy 8",
        lastname: "telefono que explota",
        age: "smartphone",
        group: 1500000,
        grade: 20
      },
      {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      },
      {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      }
    ];

    return {products};
  }

}
