const db = require('C:/Users/emidz/Desktop/NTIP projekt/server/db/baza');

db.run(`
  CREATE TABLE IF NOT EXISTS prodaja (
    id INTEGER PRIMARY KEY,
    automobil_id INTEGER UNIQUE,
    model TEXT,
    modifikacije TEXT,
    specifikacije TEXT,
    zahtjev TEXT,
    FOREIGN KEY (automobil_id) REFERENCES automobili(id),     
    FOREIGN KEY (model) REFERENCES automobili(model)
  )
`);

db.close();