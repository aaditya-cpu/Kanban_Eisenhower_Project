const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Additional routes for other specific HTML files if needed

// Route for the Kanban board page
app.get('/kanban', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kanban.html'));
});

// Route for the Eisenhower matrix page
app.get('/eisenhower', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'eisenhower.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
