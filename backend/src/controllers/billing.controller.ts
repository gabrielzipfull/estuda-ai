import { Request, Response } from 'express';
import Stripe from 'stripe';
import { env } from '../config/env';

const stripe = new Stripe(env.stripeSecretKey || '');

export async function criarCheckout(req: Request, res: Response) {
  if (!env.stripeSecretKey) return res.status(400).json({ erro: 'Configure STRIPE_SECRET_KEY' });

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    success_url: `${env.frontendUrl}/dashboard?checkout=sucesso`,
    cancel_url: `${env.frontendUrl}/precos`
  });

  res.json({ url: session.url });
}

export async function cancelarAssinatura(_req: Request, res: Response) {
  res.json({ mensagem: 'Fluxo de cancelamento disponível via portal Stripe.' });
}
