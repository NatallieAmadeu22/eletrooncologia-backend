import { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.resolve(__dirname, '../../data');
const DATA_FILE = path.join(DATA_DIR, 'products.json');

const readProducts = async (): Promise<any[]> => {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(content);
  } catch (err: any) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
};

const writeProducts = async (products: any[]) => {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), 'utf8');
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await readProducts();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao ler produtos.' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const products = await readProducts();
    const newProduct = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString(),
    };
    products.push(newProduct);
    await writeProducts(products);
    return res.status(201).json(newProduct);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao salvar produto.' });
  }
};
