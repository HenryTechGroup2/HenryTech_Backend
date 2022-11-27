import { Router } from 'express';
import {
  getUser,
  putUser,
  deleteUser,
  postUser,
  getAllUsers,
  loginUser,
} from '../controller/User.controller.js';

const router = Router();
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.post('/login', loginUser);
export default router;
