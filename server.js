const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files (HTML, CSS, JS)

// SQLite Database Setup
const db = new sqlite3.Database('church.db');

// Create tables if they don't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        description TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Insert sample events
    db.get("SELECT COUNT(*) as count FROM events", (err, row) => {
        if (row.count === 0) {
            const stmt = db.prepare("INSERT INTO events (title, date, description) VALUES (?, ?, ?)");
            stmt.run("Sabbath Worship Service", "2025-10-04", "Join us for morning worship at 9 AM.");
            stmt.run("Youth Bible Study", "2025-10-05", "Evening session for young adults.");
            stmt.run("Community Outreach", "2025-10-11", "Helping local families in need.");
            stmt.finalize();
        }
    });
});

// API Routes

// Get events
app.get('/api/events', (req, res) => {
    db.all("SELECT * FROM events ORDER BY date ASC LIMIT 6", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Post contact message
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    db.run("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)", [name, email, message], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ success: true });
    });
});

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});