import express from "express";
import { getDashboardStats } from "../controllers/dashboard.controller.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/stats",verifyToken,isAdmin,getDashboardStats);

export default router;