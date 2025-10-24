import httpStatus from '@/constants/http-status';
import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
  res.status(httpStatus.OK).send({ status: true, message: 'Welcome to PRsInsight API' });
});

router.get('/health', async (_req, res) => {
  res.status(httpStatus.OK).send('Ok');
});

export default router;
