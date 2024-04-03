const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Define routes for specific HTML files if needed
// Route for the Kanban board
app.get('/kanban', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kanban.html'));
});

// Route for the Eisenhower matrix
app.get('/eisenhower', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'eisenhower.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
