import { Router } from 'express';
import { postStripe } from '../controller/Sprite.controller.js'
const router = Router();

router.post('/api/stripe', postStripe);

export default router;