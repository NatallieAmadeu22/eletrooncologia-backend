import { Request, Response } from 'express';

let clients: any[] = [];

export const getClients = (req: Request, res: Response) => {
  return res.status(200).json(clients);
};

export const createClient = (req: Request, res: Response) => {
  const newClient = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date()
  };
  clients.push(newClient);
  return res.status(201).json(newClient);
};
