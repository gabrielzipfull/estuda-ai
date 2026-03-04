import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="mb-6 text-3xl font-bold">Entrar no EstudaAI</h1>
      <AuthForm modo="login" />
      <p className="mt-4 text-zinc-400">Ainda não tem conta? <Link className="text-cyan-400" href="/auth/cadastro">Criar conta</Link></p>
    </main>
  );
}
