import { Request, Response } from 'express';

let applications: any[] = [];

export const getApplications = (req: Request, res: Response) => {
  return res.status(200).json(applications);
};

export const createApplication = (req: Request, res: Response) => {
  const newApplication = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date()
  };
  applications.push(newApplication);
  return res.status(201).json(newApplication);
};
