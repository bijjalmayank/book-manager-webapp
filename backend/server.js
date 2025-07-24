const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
