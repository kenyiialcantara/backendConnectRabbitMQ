import { Router } from "express";
import { getProducts } from "../controllers/products";
import { handleBuyProducts } from "../controllers/products";

const router = Router();

router.get("/products", getProducts);
router.post("/products", handleBuyProducts);

export default router;
