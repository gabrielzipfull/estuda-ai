const planos = [
  {
    nome: 'Gratuito',
    preco: 'R$0/mês',
    itens: ['3 uploads por mês', 'Flashcards limitados', 'Simulados limitados']
  },
  {
    nome: 'Pro',
    preco: 'R$29/mês',
    itens: ['Uploads ilimitados', 'Tutor IA ilimitado', 'Flashcards e simulados ilimitados', 'Plano de estudo automático']
  }
];

export default function PrecosPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold">Planos</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {planos.map((plano) => (
          <div key={plano.nome} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-semibold">{plano.nome}</h2>
            <p className="mt-2 text-3xl text-cyan-400">{plano.preco}</p>
            <ul className="mt-4 space-y-2 text-zinc-300">
              {plano.itens.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
