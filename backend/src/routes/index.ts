import { Router } from 'express';
import { cadastrar, entrar, loginGoogle } from '../controllers/auth.controller';
import { criarMaterial, listarMateriais } from '../controllers/materials.controller';
import { criarSimulado, registrarResultado } from '../controllers/quiz.controller';
import { conversarTutor } from '../controllers/tutor.controller';
import { criarCheckout, cancelarAssinatura } from '../controllers/billing.controller';
import { dashboardAdmin } from '../controllers/admin.controller';
import { protegerRota } from '../middlewares/auth';

export const router = Router();

router.get('/health', (_req, res) => res.json({ status: 'ok' }));
router.post('/auth/register', cadastrar);
router.post('/auth/login', entrar);
router.post('/auth/google', loginGoogle);

router.get('/materials', protegerRota, listarMateriais);
router.post('/materials', protegerRota, criarMaterial);
router.post('/quizzes', protegerRota, criarSimulado);
router.post('/quizzes/result', protegerRota, registrarResultado);
router.post('/tutor/chat', protegerRota, conversarTutor);

router.post('/billing/checkout', protegerRota, criarCheckout);
router.post('/billing/cancel', protegerRota, cancelarAssinatura);
router.get('/admin/dashboard', protegerRota, dashboardAdmin);
