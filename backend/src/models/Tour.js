import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: String,
  description: String,
  images: [String],
});

// MUHIM QATOR 👇
export default mongoose.model("Tour", tourSchema, "tours");
