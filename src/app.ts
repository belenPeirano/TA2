import bodyParser from "body-parser";
const ProductService = require("./services/productService");
import cors from 'cors';

const express = require('express');
const app = express();
const PORT = 3000;

let products;
const productService = new ProductService();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/products",(req: any, res:any) => {
    products = productService.getProducts();
    res.json(products);
});

app.get("/product/:id")

app.listen(PORT, () => {
    console.log(`Listen at port ${PORT}`);
});
