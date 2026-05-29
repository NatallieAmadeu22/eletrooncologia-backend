import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Usuário estático por enquanto; em produção consulte um banco
  if (email === 'admin@eletrooncologia.com' && password === 'onco123') {
    const user = { name: 'Administrador Oncologista', email, role: 'admin' };
    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '8h' });

    return res.status(200).json({
      message: 'Login realizado com sucesso!',
      user,
      token
    });
  }

  return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
};
