// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from this origin
  }));
  
// Import routes
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

// Handle non-existent routes with a 404 response
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start the server
app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
