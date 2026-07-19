import {
  createOrder,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";
import express from "express";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/my-orders", verifyToken, getMyOrders);
router.get("/orders/:id", verifyToken, getOrderById);
router.get("/", verifyToken, isAdmin, getAllOrders);
router.patch("/:id/status", verifyToken, isAdmin, updateOrderStatus);

export default router;
