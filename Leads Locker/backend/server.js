import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import authRoutes from "./src/routes/userRoutes.js";


const app = express();

// Configure dotenv silently
dotenv.config({ silent: true });

// Connect with frontend (CORS)
app.use(cors());

// Connect to Database
connectDB();


// Body Parser Middleware
app.use(express.json());

// Mount the Router file under the /api base prefix
app.use("/user", authRoutes);

// Catch-all route for invalid URLs
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
