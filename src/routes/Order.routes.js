import { Router } from 'express';
import { getAllOrder, deleteOrder, postOrder } from '../controller/Order.controller.js';

const router = Router();
router.get('/', getAllOrder)
router.delete('/:id', deleteOrder);
router.post('/', postOrder);

export default router;