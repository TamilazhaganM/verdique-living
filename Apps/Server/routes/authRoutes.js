import { registerUser,loginUser, verifyEmail } from "../controllers/auth.controller.js";
import express from "express"

const router = express.Router()

router.post("/auth/register",registerUser)
router.post("/auth/login",loginUser)
router.post("/auth/verify-email",verifyEmail)


export default router;