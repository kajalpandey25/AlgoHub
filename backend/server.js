const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Import routes
const userRoutes = require('./routes/users');
const codeRoutes = require('./routes/code');

// Create app instance
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/code', codeRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to AlgoHub API!");
});

// Set port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
