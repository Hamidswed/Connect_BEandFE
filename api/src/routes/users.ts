import { Router } from "express";
import { getUserList, getUserId, createUser } from "../controllers/users";

const router = Router();

router.get("/", getUserList);
router.get("/:id", getUserId);
router.post("/", createUser);

export default router;
