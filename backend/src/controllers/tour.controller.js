import Tour from "../models/Tour.js";

export const getTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    console.log(`✅ MongoDB'dan ${tours.length} ta tour olingan`);
    res.json(tours);
  } catch (err) {
    console.error("❌ MongoDB xatosi:", err.message);
    res.status(500).json({ message: err.message });
  }
};
