import { Router } from 'express';
import { postEmail } from '../controller/Email.controller.js'
const router = Router();

router.post('/', postEmail);

export default router;