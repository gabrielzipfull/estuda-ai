-- Estrutura inicial caso não utilize Prisma Migrate
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  senha_hash TEXT,
  provider TEXT NOT NULL,
  google_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  stripe_customer_id TEXT,
  stripe_subscription TEXT,
  status TEXT DEFAULT 'inativa',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS study_materials (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  titulo TEXT NOT NULL,
  tipo TEXT NOT NULL,
  conteudo TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS flashcards (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  material_id TEXT REFERENCES study_materials(id),
  pergunta TEXT NOT NULL,
  resposta TEXT NOT NULL,
  aprendido BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quizzes (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  material_id TEXT REFERENCES study_materials(id),
  perguntas JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS progress (
  user_id TEXT PRIMARY KEY REFERENCES users(id),
  dias_seguidos INTEGER DEFAULT 0,
  tempo_total_minutos INTEGER DEFAULT 0,
  topicos_dominados INTEGER DEFAULT 0,
  pontos INTEGER DEFAULT 0,
  nivel INTEGER DEFAULT 1,
  medalhas JSONB
);

CREATE TABLE IF NOT EXISTS analytics (
  id TEXT PRIMARY KEY,
  evento TEXT NOT NULL,
  valor NUMERIC,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
