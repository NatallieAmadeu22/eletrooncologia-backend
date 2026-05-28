import { Request, Response } from 'express';

let products: any[] = [];

export const getProducts = (req: Request, res: Response) => {
  return res.status(200).json(products);
};

export const createProduct = (req: Request, res: Response) => {
  const newProduct = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date()
  };
  products.push(newProduct);
  return res.status(201).json(newProduct);
};
