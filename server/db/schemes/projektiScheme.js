const db = require('../baza');

db.run(`
    CREATE TABLE IF NOT EXISTS projekti (
        id INTEGER PRIMARY KEY,
        projekat_id INTEGER,
        model TEXT,
        odradjeno TEXT,
        FOREIGN KEY (projekat_id) REFERENCES automobili(id),     
        FOREIGN KEY (model) REFERENCES automobili(model)
    )
    
`);

db.close();