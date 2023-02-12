import { Router } from "express";
import { getProductList, getProductId } from "../controllers/products";

const router = Router();

router.get("/", getProductList);
router.get("/:id", getProductId);

export default router;
