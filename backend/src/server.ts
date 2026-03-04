import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import { router } from './routes';

const app = express();

app.use(cors({ origin: env.frontendUrl }));
app.use(express.json({ limit: '10mb' }));
app.use('/api', router);

app.listen(env.port, () => {
  console.log(`API EstudaAI rodando em http://localhost:${env.port}`);
});
