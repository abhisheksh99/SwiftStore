import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRouter.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL;

connectDB();

// Middleware
app.use(
  cors({
    origin: `${FRONTEND_URL}`,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth",userRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
