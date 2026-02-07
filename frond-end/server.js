const express = require('express');
const cors = require('cors');
const app = express();

// ⭐ CORS - BIRINCHI CHIZIQDA BO'LISHI KERAK
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`📍 ${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Mock tours data
const toursData = [
  {
    id: 1,
    name: "Samarqand Shahar Turi",
    category: "Barchasi",
    price: 150000,
    image: "https://via.placeholder.com/300x200?text=Samarqand",
    description: "Samarqand shahrining tarixiy joylarini ko'rib chiqish"
  },
  {
    id: 2,
    name: "Buxoro Qadimiy Shahar",
    category: "Barchasi",
    price: 120000,
    image: "https://via.placeholder.com/300x200?text=Bukhara",
    description: "Buxoro shahrining qadimiy bazarlari"
  },
  {
    id: 3,
    name: "Toshkent Metropolitan",
    category: "Barchasi",
    price: 100000,
    image: "https://via.placeholder.com/300x200?text=Tashkent",
    description: "Toshkent shahrining zamonaviy joylar"
  },
  {
    id: 4,
    name: "Xiva Qo'rvoni",
    category: "Barchasi",
    price: 180000,
    image: "https://via.placeholder.com/300x200?text=Khiva",
    description: "Xiva qalasining qadimiy devorlari"
  }
];

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('✅ Health check OK');
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// GET /api/tours - Barcha tourlar
app.get('/api/tours', (req, res) => {
  console.log('✅ Sending tours data:', toursData.length, 'items');
  res.json(toursData);
});

// GET /api/tours/:id - Bitta tour
app.get('/api/tours/:id', (req, res) => {
  const tour = toursData.find(t => t.id === parseInt(req.params.id));
  if (!tour) {
    return res.status(404).json({ error: 'Tour not found' });
  }
  res.json(tour);
});

// 404 handler
app.use((req, res) => {
  console.log('❌ 404 Not Found:', req.path);
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err.message);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

const PORT = process.env.PORT || 5001; // 5000 o'rniga 5001

app.listen(PORT, () => {
  console.log(`\n🚀 Server started successfully!`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`🔗 http://localhost:${PORT}/api/tours\n`);
});
