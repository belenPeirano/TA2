import { Product } from "../interfaces/product"

export class ProductService {
    products: Product[] = [{
        id: 1,
        name: "Llave",
        price: 45,
        stock: 2,
        image: []
    }]

    constructor() {}

    getProducts() {
        return this.products;
    }
}

module.exports = ProductService;
