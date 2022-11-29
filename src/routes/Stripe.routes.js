import { Router } from 'express';
import { getStripe } from '../controller/Sprite.controller.js'
const router = Router();

router.post('/api/stripe', getStripe);

export default router;