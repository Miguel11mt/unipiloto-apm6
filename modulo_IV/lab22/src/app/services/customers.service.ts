import { Injectable } from '@angular/core';
import {Customer} from "../models/customer";
/*import {CUSTOMERS} from "../mocks/customer-mock";*/

@Injectable()
export class CustomersService {

  getCustomers(): Promise<Customer[]>{
    return Promise.resolve(customers);
  }

  getProduct(id: number): Promise<Customer> {
    return this.getCustomers()
      .then(customers => customers.find(customer => customer.id === id));
  }

}

