import { Router } from "express";
import { getAllInvoice, getInvoice, postInvoice } from "../controller/Invoice.controller.js";

const router = Router();
router.get("/", getAllInvoice);
router.get("/:id", getInvoice);
router.post("/", postInvoice);

export default router;
