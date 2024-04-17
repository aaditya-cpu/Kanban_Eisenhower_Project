// Core dependencies
const express = require('express');
const path = require('path');

// Security packages
const cors = require('cors');    // Cross-Origin Resource Sharing: Allows you to relax security for cross-origin requests
const helmet = require('helmet'); // Helmet: Helps secure Express apps by setting various HTTP headers

// Environment configuration
require('dotenv').config(); // Dotenv: Loads environment variables from a .env file into process.env

// Express application instance
const app = express();
const PORT = process.env.PORT || 3000; // Using environment variable for port, with a default fallback

// // Import route handlers
// const employeeRoutes = require('./routes/employeeRoutes');
// const departmentRoutes = require('./routes/departmentRoutes');
// const userRoutes = require('./routes/userRoutes');
// const projectRoutes = require('./routes/projectRoutes');
// const taskRoutes = require('./routes/taskRoutes');

// Database configuration and initialization
const { mainDb } = require('./database/databaseConfig');
const initMainDb = require('./database/migrations/initMainDb');

// Initialize the main database
initMainDb();

// Middleware configuration
app.use(cors()); // Apply CORS middleware to enable cross-origin requests
app.use(helmet()); // Apply Helmet to secure the app by setting various HTTP headers
app.use(express.json()); // Built-in middleware for parsing JSON
app.use(express.urlencoded({ extended: true })); // Built-in middleware to parse URL-encoded bodies

// Static file serving
app.use(express.static('public')); // Serve static files from the 'public' directory

// // API routes
// app.use('/api/employees', employeeRoutes);
// app.use('/api/departments', departmentRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/tasks', taskRoutes);

// App routes for serving HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/kanban', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kanban.html'));
});
app.get('/eisenhower', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'eisenhower.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Admin panel assets
app.use('/admin', express.static(path.join(__dirname, 'public', 'Admin')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Database initialized and ready for use.');
});
