import { Router } from "express";
import { getFavorite, postFavorite, deleteFavorite } from "../controller/Invoice.controller.js";

const router = Router();
router.get("/:id", getFavorite);
router.post("/", postFavorite);
router.delete("/:id", deleteFavorite);

export default router;
