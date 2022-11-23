import { Router } from 'express';
import {
  deleteProduct,
  getProduct,
  postProduct,
  putProduct,
  getProducts,
} from '../controller/Product.controller.js';
import { validateProductDates } from '../middleware/Product.middleware.js';
const router = Router();
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', postProduct);
router.put('/:id', validateProductDates, putProduct);
router.delete('/:id', deleteProduct);

export default router;
