"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProducts = void 0;
let products = [];
const getProducts = (req, res) => {
    return res.status(200).json(products);
};
exports.getProducts = getProducts;
const createProduct = (req, res) => {
    const newProduct = {
        id: Date.now().toString(),
        ...req.body,
        createdAt: new Date()
    };
    products.push(newProduct);
    return res.status(201).json(newProduct);
};
exports.createProduct = createProduct;
