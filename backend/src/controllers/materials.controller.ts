import { Response } from 'express';
import { z } from 'zod';
import { RequestComUsuario } from '../middlewares/auth';
import { prisma } from '../services/prisma';
import { gerarFerramentasDeEstudo } from '../services/ai.service';

export async function criarMaterial(req: RequestComUsuario, res: Response) {
  const schema = z.object({ titulo: z.string().min(2), tipo: z.enum(['pdf', 'texto', 'slides', 'notas']), conteudo: z.string().min(10) });
  const data = schema.parse(req.body);

  const material = await prisma.studyMaterial.create({
    data: { ...data, userId: req.usuarioId! }
  });

  const gerado = await gerarFerramentasDeEstudo(data.conteudo);

  await prisma.flashcard.createMany({
    data: (gerado.flashcards || []).map((f: { pergunta: string; resposta: string }) => ({
      userId: req.usuarioId!,
      materialId: material.id,
      pergunta: f.pergunta,
      resposta: f.resposta
    }))
  });

  return res.status(201).json({ material, gerado });
}

export async function listarMateriais(req: RequestComUsuario, res: Response) {
  const materiais = await prisma.studyMaterial.findMany({ where: { userId: req.usuarioId } });
  return res.json(materiais);
}
