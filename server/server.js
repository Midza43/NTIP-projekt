// server/server.js
const express = require('express');
const app = express();
const port = 3001; // Choose any available port

const db = require('./db/baza');

db.run(`
  CREATE TABLE IF NOT EXISTS automobili (
    id INTEGER PRIMARY KEY,
    model TEXT,
    gorivo TEXT,
    opis TEXT
  )
`);

db.close();

app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});