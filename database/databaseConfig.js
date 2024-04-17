const sqlite3 = require('sqlite3').verbose();

// Define the path to the database file
const DB_PATH = './database/main/main.sqlite';

// Initialize the database
const mainDb = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error("Error opening database", err.message);
    } else {
        console.log("Connected to the main database.");
    }
});

module.exports = { mainDb };
