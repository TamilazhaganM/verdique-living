import express from "express";
import { createContact, getAllContacts, updateContactStatus } from "../controllers/contact.Controller.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createContact);
router.get("/",verifyToken,isAdmin,getAllContacts)
router.patch("/:id",verifyToken,isAdmin,updateContactStatus)

export default router;