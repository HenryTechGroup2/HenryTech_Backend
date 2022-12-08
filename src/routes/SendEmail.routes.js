import { Router } from 'express';
import { postSendEmail } from '../controller/SendEmail.controller.js'
const router = Router();

router.post('/', postSendEmail);

export default router;