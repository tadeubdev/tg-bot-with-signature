const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    telegram_id TEXT,
    subscription_status TEXT,
    channel_id TEXT,
    subscription_expires_at TEXT
  )`);
});

module.exports = db;
