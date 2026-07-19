import express from "express";
import { verifyToken } from "../middleware/auth.middleware.js";

import {
  toggleWishlist,
  getWishlist,
} from "../controllers/wishlist.controller.js";

const router = express.Router();

router.post("/:productId", verifyToken, toggleWishlist);

router.get("/", verifyToken, getWishlist);

export default router;
