const db = require('../db/baza');

class Automobili {
  static getAll(callback) {
    db.all('SELECT * FROM automobili', callback);
  }

  static create(newAutomobili, callback) {
    
    db.run(
      'INSERT INTO automobili (model, gorivo, transmisija, pogon, godiste, konjskihSnaga, obrtniMoment, boja, ECU, tuning, tuningStage, opis) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [newAutomobili.model, newAutomobili.gorivo, newAutomobili.transmisija, newAutomobili.pogon, newAutomobili.godiste, newAutomobili.konjskihSnaga,newAutomobili.obrtniMoment,newAutomobili.boja,newAutomobili.ecu,newAutomobili.tuning,newAutomobili.tuningStage,newAutomobili.opis],
      callback
    );
  }

  static getById(automobilId, callback) {
    db.get('SELECT * FROM automobili WHERE id = ?', [automobilId], callback);
  }

  static update(automobilId, updatedAutomobili, callback) {
    db.run(
      'UPDATE automobili SET model = ?, gorivo = ?, transmisija = ?, pogon = ?, opis = ?, godiste = ?, konjskihsnaga = ?, obrtniMoment = ?, boja = ?, ECU = ?, tuning = ?, tuningStage = ? WHERE id = ?',
      [updatedAutomobili.model, updatedAutomobili.gorivo, updatedAutomobili.transmisija, updatedAutomobili.pogon, updatedAutomobili.opis, updatedAutomobili.godiste, updatedAutomobili.konjskihsnaga,updatedAutomobili.obrtniMoment,updatedAutomobili.boja,updatedAutomobili.ECU,updatedAutomobili.tuning,updatedAutomobili.tuningStage, automobilId],
      callback
    );
  }
  static delete(automobilId, callback) {
    db.run('DELETE FROM automobili WHERE id = ?', [automobilId], callback);
  }
  static prodaj(automobilId, model, odradjeno, specifikacije, callback) {
    db.run('INSERT OR IGNORE INTO prodaja (automobil_id, model, modifikacije, specifikacije, zahtjev) VALUES (?, ?, ?, ?, ?)', [automobilId, model, odradjeno, specifikacije,'-'], function (err) {
      if (err) {
        console.error('Error executing SQL statement:', err.message);
        return callback(err, { changes: 0 }); // Provide a valid result object in case of an error
      }

      callback(null, { changes: this.changes }); 
    });
  }   



}

module.exports = Automobili;