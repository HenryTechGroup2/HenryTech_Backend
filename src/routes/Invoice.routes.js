import { Router } from "express";
import { getInvoice, postInvoice } from "../controller/Invoice.controller.js";

const router = Router();
router.get("/invoice/:id", getInvoice);
router.post("/invoice", postInvoice);

export default router;
