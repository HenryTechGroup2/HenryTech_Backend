import { Router } from 'express';
import {
  getUser,
  putUser,
  deleteUser,
  postUser,
  getAllUsers,
  loginUser,
  adminUser,
  loginUserAuth0,
  userDesabilited,
  getMessagesUser,
} from '../controller/User.controller.js';

const router = Router();
router.get('/', getAllUsers);
router.get('/messages', getMessagesUser);
router.get('/:id', getUser);
router.put('/admin', adminUser);
router.put('/suspense', userDesabilited);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.post('/login', loginUser);
router.post('/login/auth0', loginUserAuth0);

export default router;
