import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { connectToDB } from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/", userRoutes);

connectToDB();

export default app;
