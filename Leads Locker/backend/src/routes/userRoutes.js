import express from "express";
import { registerUser, loginUser, socialSync } from "../controller/userController.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/social-sync", socialSync);

export default router;
