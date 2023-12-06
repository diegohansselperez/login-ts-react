import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth';
import { loginHandler, profileHandler } from '../controllers/auht.controller';

const router = Router();

router.post('/login', loginHandler);

router.get('/profile', requireAuth, profileHandler);

export default router;
