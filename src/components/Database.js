const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// Create a users table
db.serialize(() => {
  db.run("CREATE TABLE users (username TEXT UNIQUE, password TEXT)");
});

module.exports = db;
