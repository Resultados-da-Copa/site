import { Router } from 'express';
import { auth } from './middlewares/auth';

export const router = Router();

router.post('/auth', auth);
