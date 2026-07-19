import express from "express";
import { verifyToken } from "../middleware/auth.middleware.js";
import { createReview,deleteReview,getProductReviews, updateReview } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:productId", getProductReviews);
router.put("/:id", verifyToken, updateReview);

router.delete("/:id", verifyToken, deleteReview);

export default router;