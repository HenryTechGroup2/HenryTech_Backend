import { Router } from 'express';
import {putOrder, deleteOrder, postOrder, getAllOrders, getOrderOfUser } from '../controller/Order.controller.js';

const router = Router();
router.get('/:id', getOrderOfUser);
router.get('/', getAllOrders);
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);
router.post('/', postOrder);

export default router;