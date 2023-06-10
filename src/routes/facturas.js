import { Router } from "express";
import { getFactura, getFacturas, saveFactura } from "../controllers/facturas";

const router = Router();

router.get("/facturas", getFacturas);
router.post("/facturas", saveFactura);
router.get("/facturas/id", getFactura);

export default router;
