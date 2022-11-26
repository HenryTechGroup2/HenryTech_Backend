import { Router } from "express";
import { newFavorite } from "../controller/Favorite.controller.js";

const router = Router();

router.post("/:idUser/:idProduct", newFavorite);

export default router;
