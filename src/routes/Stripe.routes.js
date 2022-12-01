import { Router } from 'express';
import { postStripe } from '../controller/Sprite.controller.js'
const router = Router();

router.post('/', postStripe);

export default router;