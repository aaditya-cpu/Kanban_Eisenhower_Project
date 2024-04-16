const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Database configuration
const database = require('./database/databaseConfig');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Dynamic routes for API
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

// Static file routes
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

// Handling admin panel assets
app.use('/admin', express.static(path.join(__dirname, 'public', 'Admin')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
