import express from "express";
import { getTours } from "../controllers/tour.controller.js";

const router = express.Router();

router.get("/", getTours);

export default router;
