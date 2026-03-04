import Link from 'next/link';

const secoes = [
  { titulo: 'Como funciona', texto: 'Envie seus materiais, a IA processa e cria resumos, flashcards e simulados automaticamente.' },
  { titulo: 'Benefícios', texto: 'Estudo ativo, revisão inteligente, plano personalizado e mais foco para aprender mais rápido.' },
  { titulo: 'Depoimentos', texto: '“Aumentei minha nota em 30% em 2 meses usando o EstudaAI.” — Júlia, Medicina' },
  { titulo: 'Preços', texto: 'Plano Gratuito e Plano Pro por R$29/mês com recursos ilimitados.' },
  { titulo: 'FAQ', texto: 'Dúvidas sobre IA, assinatura, cancelamento e privacidade respondidas de forma simples.' }
];

export function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 px-6 py-10">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold text-cyan-400">EstudaAI</h1>
        <div className="flex gap-3">
          <Link className="rounded-lg border border-zinc-700 px-4 py-2" href="/auth/login">Entrar</Link>
          <Link className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold" href="/auth/cadastro">Criar conta</Link>
        </div>
      </header>

      <section className="mx-auto mt-16 max-w-6xl rounded-2xl border border-zinc-800 bg-zinc-900/60 p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">Estude 10x mais rápido com Inteligência Artificial</p>
        <h2 className="mt-4 text-4xl font-bold">A IA que estuda por você</h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Transforme PDFs, slides e anotações em um ecossistema completo: resumo, flashcards, simulados e tutor inteligente em segundos.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold" href="/auth/cadastro">Começar grátis</Link>
          <Link className="rounded-lg border border-zinc-700 px-5 py-3" href="/precos">Ver planos</Link>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2">
        {secoes.map((secao) => (
          <article key={secao.titulo} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">{secao.titulo}</h3>
            <p className="mt-3 text-zinc-300">{secao.texto}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-4xl rounded-xl bg-indigo-600 p-8 text-center">
        <h3 className="text-2xl font-bold">Pronto para dominar qualquer prova?</h3>
        <p className="mt-2 text-indigo-100">Crie sua conta e receba seu primeiro plano de estudo automático em menos de 2 minutos.</p>
      </section>
    </main>
  );
}
