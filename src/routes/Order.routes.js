import { Router } from 'express';
import { getOrder,putOrder, deleteOrder, postOrder } from '../controller/Order.controller.js';

const router = Router();
router.get('/:id', getOrder)
router.post('/:id', putOrder);
router.delete('/:id', deleteOrder);
router.post('/', postOrder);

export default router;