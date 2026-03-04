const menu = ['Dashboard', 'Meus materiais', 'Flashcards', 'Simulados', 'Tutor IA', 'Plano de estudo', 'Progresso', 'Configurações'];

const cards = [
  { titulo: 'Dias seguidos', valor: '12' },
  { titulo: 'Tempo total estudado', valor: '42h' },
  { titulo: 'Tópicos dominados', valor: '28' },
  { titulo: 'Pontos', valor: '1.280 XP' }
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen">
      <aside className="w-64 border-r border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-xl font-bold text-cyan-400">EstudaAI</h1>
        <nav className="mt-6 space-y-2">
          {menu.map((item) => <button key={item} className="block w-full rounded-lg px-3 py-2 text-left hover:bg-zinc-800">{item}</button>)}
        </nav>
      </aside>
      <section className="flex-1 p-8">
        <h2 className="text-3xl font-bold">Seu progresso</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {cards.map((card) => (
            <article key={card.titulo} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-zinc-400">{card.titulo}</p>
              <p className="mt-2 text-2xl font-bold text-cyan-400">{card.valor}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Upload de material</h3>
            <p className="mt-2 text-zinc-300">Envie PDF, texto, slides ou notas para gerar resumo estruturado, conceitos, flashcards, perguntas e explicação simplificada.</p>
            <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2">Enviar material</button>
          </article>
          <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Recursos inovadores</h3>
            <ul className="mt-2 space-y-2 text-zinc-300">
              <li>• Mapa mental automático</li>
              <li>• Modo foco de estudo</li>
              <li>• Resumos em áudio</li>
              <li>• Biblioteca pública de materiais</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
