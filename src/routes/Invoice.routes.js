import { Router } from "express";
import { getInvoice, postInvoice } from "../controller/Invoice.controller.js";

const router = Router();
router.get("/:id", getInvoice);
router.post("/", postInvoice);

export default router;
