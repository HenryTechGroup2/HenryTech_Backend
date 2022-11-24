import { Router } from 'express';
import { postOrder } from '../controller/Order.controller.js';

const router = Router();
router.post('/', postOrder);

export default router;