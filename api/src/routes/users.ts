import { Router } from "express";
import { getUserList, getUserById, createUser,loginUser } from "../controllers/users";

const router = Router();

router.get("/", getUserList);
router.get("/:id", getUserById);
router.post("/", createUser);
router.post("/login",loginUser)

export default router;
