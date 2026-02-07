import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import tourRoutes from "./routes/tour.routes.js";

dotenv.config();

const app = express();

// ✅ CORS O'RNATISH (Frontend-Backend orasida bog'lanish)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  // OPTIONS request'ga javob berish
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB ulandi"))
  .catch((err) => console.log(err));

app.use("/api/tours", tourRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000");
});
