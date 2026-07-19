import express from "express";
import { verifyToken, isAdmin } from "../middleware/auth.middleware.js";
import { getAllUsers, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", verifyToken, isAdmin, getAllUsers);
router.get("/:id", verifyToken, isAdmin, getUserById);

export default router;