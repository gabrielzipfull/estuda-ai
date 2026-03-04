import { Response } from 'express';
import { z } from 'zod';
import { RequestComUsuario } from '../middlewares/auth';
import { prisma } from '../services/prisma';

export async function criarSimulado(req: RequestComUsuario, res: Response) {
  const schema = z.object({ materialId: z.string(), perguntas: z.array(z.object({ tipo: z.enum(['multipla_escolha', 'verdadeiro_falso', 'aberta']), enunciado: z.string(), resposta: z.string() })) });
  const data = schema.parse(req.body);

  const quiz = await prisma.quiz.create({
    data: {
      userId: req.usuarioId!,
      materialId: data.materialId,
      perguntas: data.perguntas
    }
  });

  res.status(201).json(quiz);
}

export async function registrarResultado(req: RequestComUsuario, res: Response) {
  const schema = z.object({ quizId: z.string(), pontuacao: z.number().min(0).max(100) });
  const data = schema.parse(req.body);

  const progresso = await prisma.progress.upsert({
    where: { userId: req.usuarioId! },
    create: { userId: req.usuarioId!, diasSeguidos: 1, tempoTotalMinutos: 30, topicosDominados: 1, pontos: data.pontuacao },
    update: { pontos: { increment: data.pontuacao }, tempoTotalMinutos: { increment: 30 } }
  });

  res.json({ quizId: data.quizId, progresso });
}
