import { RequestComUsuario } from '../middlewares/auth';
import { Response } from 'express';
import { z } from 'zod';
import { gerarFerramentasDeEstudo } from '../services/ai.service';

export async function conversarTutor(req: RequestComUsuario, res: Response) {
  const schema = z.object({ pergunta: z.string().min(5), contexto: z.string().min(5) });
  const data = schema.parse(req.body);

  const resposta = await gerarFerramentasDeEstudo(`${data.contexto}\nPergunta do aluno: ${data.pergunta}`);
  res.json({ resposta: resposta.explicacaoSimplificada || resposta.resumo });
}
