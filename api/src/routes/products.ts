import { Router } from "express";
import { getProductList } from "../controllers/products";

const router = Router()

router.get('/',getProductList)

export default router