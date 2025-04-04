const express = require('express');
const app = express();

// Import Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.json()); // JSON Body Parser

// Use Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Server Start
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
