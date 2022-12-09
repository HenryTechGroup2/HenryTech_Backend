import { Router } from 'express';
import {
  deleteProduct,
  getProduct,
  postProduct,
  putProduct,
  getProducts,
  suspenseProduct,
} from '../controller/Product.controller.js';
import { validateProductDates } from '../middleware/Product.middleware.js';
const router = Router();
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', postProduct);
router.put('/suspense', suspenseProduct);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct);

export default router;
