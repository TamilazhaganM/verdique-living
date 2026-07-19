import express from "express";

import {createCategory,getAllCategories, getCategoryById,updateCategory,deleteCategory,} from "../controllers/category.controller.js";

import {verifyToken} from "../middleware/auth.middleware.js";

import upload from "../middleware/uploadMiddleware.js";



const router = express.Router();

// Public Routes
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

// Admin Routes
router.post("/", upload.single("image"), createCategory);
router.delete("/:id", verifyToken, deleteCategory);
router.put("/:id", upload.single("image"), updateCategory);
export default router;