import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export interface RequestComUsuario extends Request {
  usuarioId?: string;
}

export function protegerRota(req: RequestComUsuario, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ erro: 'Não autenticado' });

  try {
    const payload = jwt.verify(token, env.jwtSecret) as { sub: string };
    req.usuarioId = payload.sub;
    next();
  } catch {
    return res.status(401).json({ erro: 'Token inválido' });
  }
}
