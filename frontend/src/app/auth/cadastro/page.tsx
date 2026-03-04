import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';

export default function CadastroPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="mb-6 text-3xl font-bold">Criar conta</h1>
      <AuthForm modo="cadastro" />
      <p className="mt-4 text-zinc-400">Já possui conta? <Link className="text-cyan-400" href="/auth/login">Entrar</Link></p>
    </main>
  );
}
