const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('winston');
const socketIo = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = socketIo(server);

// Port where the server will listen
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());  // Enable CORS
app.use(helmet());  // Secure apps by setting various HTTP headers
app.use(morgan('combined'));  // HTTP request logger
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

// Setup static files serving with caching
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d'  // Cache static assets for 1 day
}));

// Real-time communication setup
io.on('connection', socket => {
    console.log('A user connected');
    socket.on('update', (data) => {
        socket.broadcast.emit('update', data);  // Emit updates to all connected clients
    });
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Admin assets
app.use('/admin', express.static(path.join(__dirname, 'public', 'Admin')));

// Error handling middleware
app.use((err, req, res, next) => {
    winston.error(`${err.status || 500} - ${err.message}`);
    res.status(err.status || 500);
    res.send('Internal Server Error');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

