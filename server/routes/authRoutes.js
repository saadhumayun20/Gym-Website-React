const express = require('express');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/sqlite.db');

const router = express.Router();

router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT username FROM users WHERE username = ?', [username], (err, row) => {
        if (row) {
            return res.status(400).json({ message: 'Username already exists' });
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);
            db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
                if (err) return res.status(500).json({ message: 'Database error' });
                res.status(201).json({ message: 'User registered successfully' });
            });
        }
    });
});

router.post('/signin', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        if (!row || !bcrypt.compareSync(password, row.password)) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Sign in successful' });
    });
});

module.exports = router;
