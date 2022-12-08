import { Router } from 'express';
import { postCarEmail } from '../controller/CarEmail.controller.js'
const router = Router();

router.post('/', postCarEmail);

export default router;