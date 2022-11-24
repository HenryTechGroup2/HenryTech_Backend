import { Router } from 'express';
import { getAllOrder, putOrder, deleteOrder, postOrder } from '../controller/Order.controller.js';

const router = Router();
router.get('/', getAllOrder)
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);
router.post('/', postOrder);

export default router;