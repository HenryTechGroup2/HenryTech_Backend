import { Router } from 'express';
import {
  getStock,
  putStock,
  deleteStock,
  postStock,
  getAllStock
} from '../controller/Stock.controller.js';

const router = Router();
router.get('/', getAllStock)
router.get('/:id', getStock);
router.put('/:id', putStock);
router.delete('/:id', deleteStock);
router.post('/', postStock);

export default router;