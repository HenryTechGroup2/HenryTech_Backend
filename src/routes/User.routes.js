import { Router } from 'express';
import {
  getUser,
  putUser,
  deleteUser,
  postUser,
} from '../controller/User.controller.js';

const router = Router();
router.get('/api/user/:id', getUser);
router.put('/api/user/:id', putUser);
router.delete('/api/user/:id', deleteUser);
router.post('/api/user', postUser);

export default router;
