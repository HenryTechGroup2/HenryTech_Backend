import { Router } from 'express';
import {
  getUser,
  putUser,
  deleteUser,
  postUser,
  getAllUsers
} from '../controller/User.controller.js';

const router = Router();
router.get('/', getAllUsers)
router.get('/:id', getUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);

export default router;
