import {InMemoryDbService} from "angular2-in-memory-web-api";

import {Product} from "../models/product";
import {Customer} from "../models/customer";
import {SalesInvoice} from "../models/sales-invoice";

/*import {PRODUCTS} from "./product-mock";
import {CUSTOMERS} from "./customer-mock";

let _PRODUCTS: Product[] = PRODUCTS;
let _CUSTOMERS: Customer[] = CUSTOMERS;*/

export class InMemoryProductService implements InMemoryDbService {
    createDb() {
        let products: Array<Product> = [
            {
                id: 1,
                name: "Samsung galaxy 8",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
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


        let customers: Array<Customer> = [
            {
                id: 1,
                name: "Samsung galaxy 8",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
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

        let sales_invoice: Array<SalesInvoice> = [
            {
                id: 1,
                customer: 1,
                lineItems: 1,
                invoiceAmount: 10000,
                tax: 16
            }
    /*,
    ,
    {
        id: 2,
        customer: 1,
        lineItems: [
            {
                id: 1,
                productId: 1,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: 2,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: 3,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 20,
        customer: 2,
        lineItems: [
            {
                id: 1,
                productId: 4,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: 5,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    }
    
    {
        id: 19,
        customer: 6,
        lineItems: [
            {
                id: 1,
                productId: 7,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: 8,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 22,
        customer: 3,
        lineItems: [
            {
                id: 1,
                productId: 9,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: 10,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: 11,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 200,
        customer: 4,
        lineItems: [
            {
                id: 1,
                productId: 12,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 17,
        customer: 5,
        lineItems: [
            {
                id: 1,
                productId: 13,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 29,
        customer: 6,
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 20,
        customer: 7,
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 41,
        customer: 8,
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 62,
        customer: _CUSTOMERS[2],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 220,
        customer: 9,
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 123,
        customer: 10,
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 223,
        customer: 11,
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 2016,
        customer: 12,
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    }*/
        ];
     

        return {products,sales_invoice,customers};
    }

}
