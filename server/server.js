const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');


const app = express();
const PORT = 3001;

// Middleware 
app.use(bodyParser.json());
app.use(cors());

// Database setup
const db = require('./database/dbSetup')


// Sign-up route
app.post('/api/auth/signup', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }
  
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], function(err) {
      if (err) {
        return res.status(400).json({ error: 'Username already exists.' });
      }
      res.status(200).json({ message: 'User signed up successfully!' });
    });
  });

  app.post('/api/auth/signin', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        return res.json({ message: 'Sign in successful' });
    });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
