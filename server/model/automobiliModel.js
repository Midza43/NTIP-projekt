const db = require('../db/baza');

class Automobili {
  static getAll(callback) {
    db.all('SELECT * FROM automobili', callback);
  }

  static create(newAutomobili, callback) {
    
    db.run(
      'INSERT INTO automobili (model, gorivo, transmisija, pogon, opis) VALUES (?, ?, ?, ?, ?)',
      [newAutomobili.model, newAutomobili.gorivo, newAutomobili.transmisija, newAutomobili.pogon, newAutomobili.opis],
      callback
    );
  }

  static getById(automobilId, callback) {
    db.get('SELECT * FROM automobili WHERE id = ?', [automobilId], callback);
  }

  static update(automobilId, updatedAutomobili, callback) {
    db.run(
      'UPDATE automobili SET model = ?, gorivo = ?, transmisija = ?, pogon = ?, opis = ? WHERE id = ?',
      [updatedAutomobili.model, updatedAutomobili.gorivo, updatedAutomobili.transmisija, updatedAutomobili.pogon, updatedAutomobili.opis, automobilId],
      callback
    );
  }
  static delete(automobilId, callback) {
    db.run('DELETE FROM automobili WHERE id = ?', [automobilId], callback);
  }

}

module.exports = Automobili;