import { registerUser,loginUser, verifyEmail, getCurrentUser } from "../controllers/auth.controller.js";
import express from "express"
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/verify-email",verifyEmail)
router.get("/me",verifyToken,getCurrentUser)


export default router;