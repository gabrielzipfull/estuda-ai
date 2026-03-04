import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EstudaAI – A IA que estuda por você',
  description: 'Plataforma SaaS para acelerar seus estudos com IA.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
