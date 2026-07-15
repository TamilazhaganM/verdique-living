import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.controller.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/",upload.single("image"),createProduct);
router.get("/",getAllProducts)
router.get("/:id",getProductById)
router.put("/:id",upload.single("image"),updateProduct)
router.delete("/:id",deleteProduct)

export default router;