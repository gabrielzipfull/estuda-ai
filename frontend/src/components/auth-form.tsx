'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function AuthForm({ modo }: { modo: 'login' | 'cadastro' }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  async function enviarFormulario(event: React.FormEvent) {
    event.preventDefault();
    setErro('');

    const endpoint = modo === 'cadastro' ? '/auth/register' : '/auth/login';
    const payload = modo === 'cadastro' ? { nome, email, senha } : { email, senha };

    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!resposta.ok) {
      setErro('Não foi possível autenticar. Verifique seus dados.');
      return;
    }

    router.push('/dashboard');
  }

  return (
    <form className="space-y-4" onSubmit={enviarFormulario}>
      {modo === 'cadastro' && (
        <input className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      )}
      <input className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3" placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      {erro && <p className="text-red-400">{erro}</p>}
      <button className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold" type="submit">{modo === 'cadastro' ? 'Criar conta' : 'Entrar'}</button>
      <button className="w-full rounded-lg border border-zinc-700 px-4 py-3" type="button">Continuar com Google</button>
    </form>
  );
}
