const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

<<<<<<< HEAD
// Optional: Define routes for specific HTML files if needed
// Route for the Kanban board

// Example route for the home page
=======
// Route for the login page
>>>>>>> 000deb455bcb0ae34c3267258cb2aa21cab534a7
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

<<<<<<< HEAD
=======
// Additional routes for other specific HTML files if needed

// Route for the Kanban board page
>>>>>>> 000deb455bcb0ae34c3267258cb2aa21cab534a7
app.get('/kanban', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kanban.html'));
});

// Route for the Eisenhower matrix page
app.get('/eisenhower', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'eisenhower.html'));
});
<<<<<<< HEAD
//login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
// Handling admin panel assets
app.use('/admin', express.static(path.join(__dirname, 'public', 'Admin')));
=======
>>>>>>> 000deb455bcb0ae34c3267258cb2aa21cab534a7

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
