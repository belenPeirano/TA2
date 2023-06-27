"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor() {
        this.products = [{
                id: 1,
                name: "Llave",
                price: 45,
                stock: 2,
                image: []
            }];
    }
    getProducts() {
        return this.products;
    }
}
exports.ProductService = ProductService;
module.exports = ProductService;
//# sourceMappingURL=productService.js.map