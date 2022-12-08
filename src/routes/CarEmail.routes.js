import { Router } from 'express';
import { postCartEmail } from '../controller/CartEmail.controller.js'
const router = Router();

router.post('/', postCartEmail);

export default router;