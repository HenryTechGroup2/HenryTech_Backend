import { Router } from 'express';
import {
  addFavorite,
  removeFavorite,
} from '../controller/Favorite.controller.js';

const router = Router();

router.post('/', addFavorite);
router.delete('/:user_id/:product_id', removeFavorite);

export default router;
