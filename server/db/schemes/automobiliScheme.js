const db = require('C:/Users/emidz/Desktop/NTIP projekt/server/db/baza');

db.run(`
  CREATE TABLE IF NOT EXISTS automobili (
    id INTEGER PRIMARY KEY,
    model TEXT,
    gorivo TEXT,
    transmisija TEXT,
    pogon TEXT,
    opis TEXT
  )
`);

db.close();