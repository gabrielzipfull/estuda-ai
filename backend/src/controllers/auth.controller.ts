import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { prisma } from '../services/prisma';
import { env } from '../config/env';

export async function cadastrar(req: Request, res: Response) {
  const schema = z.object({ nome: z.string().min(2), email: z.string().email(), senha: z.string().min(6) });
  const data = schema.parse(req.body);

  const existente = await prisma.user.findUnique({ where: { email: data.email } });
  if (existente) return res.status(409).json({ erro: 'Email já cadastrado' });

  const senhaHash = await bcrypt.hash(data.senha, 10);
  const usuario = await prisma.user.create({
    data: { nome: data.nome, email: data.email, senhaHash, provider: 'email' }
  });

  const token = jwt.sign({}, env.jwtSecret, { subject: usuario.id, expiresIn: '7d' });
  return res.status(201).json({ token, usuario });
}

export async function entrar(req: Request, res: Response) {
  const schema = z.object({ email: z.string().email(), senha: z.string().min(6) });
  const data = schema.parse(req.body);

  const usuario = await prisma.user.findUnique({ where: { email: data.email } });
  if (!usuario?.senhaHash) return res.status(401).json({ erro: 'Credenciais inválidas' });

  const senhaCorreta = await bcrypt.compare(data.senha, usuario.senhaHash);
  if (!senhaCorreta) return res.status(401).json({ erro: 'Credenciais inválidas' });

  const token = jwt.sign({}, env.jwtSecret, { subject: usuario.id, expiresIn: '7d' });
  return res.json({ token, usuario });
}

export async function loginGoogle(req: Request, res: Response) {
  const schema = z.object({ email: z.string().email(), nome: z.string().min(2), googleId: z.string().min(2) });
  const data = schema.parse(req.body);

  const usuario = await prisma.user.upsert({
    where: { email: data.email },
    create: { email: data.email, nome: data.nome, provider: 'google', googleId: data.googleId },
    update: { nome: data.nome, googleId: data.googleId }
  });

  const token = jwt.sign({}, env.jwtSecret, { subject: usuario.id, expiresIn: '7d' });
  return res.json({ token, usuario });
}
