import express from "express";
import { registerUser, loginUser } from "../controller/userController.js";
// Keeping these ready for when you decide to build them out down the line:
// import { protect } from "../middleware/authMiddleware.js"; 

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);



export default router;