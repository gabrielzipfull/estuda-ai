# EstudaAI – A IA que estuda por você

Plataforma SaaS em **Português do Brasil** para estudantes enviarem materiais e receberem automaticamente:
- resumo estruturado,
- conceitos principais,
- flashcards inteligentes,
- simulados,
- apoio de Tutor IA,
- plano de estudo e acompanhamento de progresso.

## Stack
- **Frontend:** Next.js + React + Tailwind + TypeScript
- **Backend:** Node.js + Express (API REST)
- **Banco:** PostgreSQL + Prisma
- **Auth:** email/senha e endpoint para Google OAuth
- **IA:** OpenAI API
- **Pagamento:** Stripe assinatura mensal
- **Deploy:** pronto para Vercel (frontend) e serviço Node (backend)

## Estrutura
```
frontend/      # app web Next.js
backend/       # API REST + Prisma
database/      # SQL de bootstrap
docs/          # documentação adicional
```

## Como rodar localmente
1. Instale dependências:
   ```bash
   npm install
   ```
2. Copie variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
3. Suba o PostgreSQL local.
4. Gere o client Prisma e aplique schema:
   ```bash
   npm --workspace backend exec prisma db push
   ```
5. Rode frontend + backend:
   ```bash
   npm run dev
   ```
6. Acesse:
   - Frontend: http://localhost:3000
   - API: http://localhost:4000/api/health

## Configuração de API Keys
No `.env` configure:
- `OPENAI_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_ID`
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID` (integração de login social no front)

## Deploy
### Frontend na Vercel
- Importar projeto na Vercel apontando para `frontend`.
- Definir variável `NEXT_PUBLIC_API_URL` com a URL pública da API.

### Backend
- Deploy em Railway/Render/Fly com Node 20+.
- Configurar variáveis do `.env`.
- Rodar `prisma db push` no startup release.

## Recursos implementados
- Landing page completa com CTA, benefícios, preços e FAQ.
- Fluxo de cadastro/login e opção de login com Google.
- Dashboard com menu lateral e widgets de progresso.
- Endpoints de materiais, flashcards, simulados, tutor IA, billing e admin analytics.
- Schema relacional para users, subscriptions, study_materials, flashcards, quizzes, progress e analytics.

## Próximos passos recomendados
- Integrar upload real de arquivos (S3 + parser PDF/PPT).
- Conectar Google OAuth no frontend com NextAuth.
- Implementar webhook Stripe para atualização automática de assinatura.
- Adicionar testes E2E e monitoramento.
