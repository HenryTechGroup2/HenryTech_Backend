import { Router } from 'express';
import { getReview, deleteReview, postReview, getAllReview } from '../controller/Review.controller.js';

const router = Router();
router.get('/', getAllReview)
router.get('/:id', getReview);
router.delete('/:id', deleteReview);
router.post('/', postReview);

export default router;