import OpenAI from 'openai';
import { env } from '../config/env';

const client = new OpenAI({ apiKey: env.openAiApiKey });

export async function gerarFerramentasDeEstudo(conteudo: string) {
  if (!env.openAiApiKey) {
    return {
      resumo: 'Configure OPENAI_API_KEY para gerar conteúdo real.',
      conceitos: ['Conceito A', 'Conceito B'],
      flashcards: [{ pergunta: 'Pergunta exemplo?', resposta: 'Resposta exemplo.' }],
      perguntasProva: ['Pergunta de múltipla escolha exemplo'],
      explicacaoSimplificada: 'Explicação simplificada de demonstração.'
    };
  }

  const prompt = `Você é tutor brasileiro. Gere JSON com resumo, conceitos, flashcards, perguntasProva, explicacaoSimplificada usando: ${conteudo}`;
  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.4,
    response_format: { type: 'json_object' },
    messages: [{ role: 'user', content: prompt }]
  });

  return JSON.parse(completion.choices[0].message.content || '{}');
}
