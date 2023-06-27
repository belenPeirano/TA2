"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const ProductService = require("./services/productService");
const cors_1 = __importDefault(require("cors"));
const express = require('express');
const app = express();
const PORT = 3000;
let products;
const productService = new ProductService();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/products", (req, res) => {
    products = productService.getProducts();
    res.json(products);
});
app.listen(PORT, () => {
    console.log(`Listen at port ${PORT}`);
});
//# sourceMappingURL=app.js.map