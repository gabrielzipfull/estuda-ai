import { Request, Response } from 'express';
import { prisma } from '../services/prisma';

export async function dashboardAdmin(_req: Request, res: Response) {
  const [usuariosAtivos, assinaturas, analytics] = await Promise.all([
    prisma.user.count(),
    prisma.subscription.count({ where: { status: 'ativa' } }),
    prisma.analytics.findMany({ orderBy: { createdAt: 'desc' }, take: 30 })
  ]);

  const mrr = assinaturas * 29;
  res.json({ usuariosAtivos, mrr, crescimento: analytics.length, analytics });
}
