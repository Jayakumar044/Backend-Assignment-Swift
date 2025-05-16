import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectToDB } from "./config/db";
import userRoutes from "./routes/userRoutes"; 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/", userRoutes);

app.listen(PORT, async () => {
    await connectToDB();
  console.log(`Server running on port ${PORT}`);
});
