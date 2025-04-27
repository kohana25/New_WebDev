const Database = require('better-sqlite3');
const db = new Database("users.db");

db.prepare(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);`).run();

module.exports = db;
//   db.prepare("INSERT INTO users (name, email) VALUES (?, ?)").run(name, email);