# Arquitetura do Projeto

## Frontend (Next.js)
- App Router
- Páginas: landing, login, cadastro, preços, dashboard
- UI responsiva com Tailwind

## Backend (API REST)
- Express com módulos por domínio
- Middlewares de autenticação JWT
- Controllers para auth, materiais, quizzes, tutor, billing e admin

## Banco de dados
- Prisma + PostgreSQL
- Tabelas: users, subscriptions, study_materials, flashcards, quizzes, progress, analytics

## IA
- Serviço central `ai.service.ts` integrado à OpenAI
- Fallback para ambiente sem chave

## Pagamentos
- Endpoint de checkout Stripe para assinatura mensal
- Endpoint de cancelamento (via portal)

## Analytics e crescimento
- Registro de eventos em tabela `analytics`
- Dashboard admin retornando usuários ativos, MRR e crescimento
