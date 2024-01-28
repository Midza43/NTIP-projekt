const db = require('../db/baza');

class Modeli {
  static getAllModeli(callback) {
    db.all('SELECT id, model, boja, konjskihsnaga, obrtniMoment FROM automobili', callback);
  }

  static getAllModeliStage1(callback) {
    db.all('SELECT id, model, boja, konjskihsnaga FROM automobili WHERE ECU = "Da" AND tuningStage NOT IN ("Stage 1", "Stage 2", "Stage 3")', callback);
  }

  static getAllModeliStage2(callback) {
    db.all('SELECT id, model, boja, konjskihsnaga FROM automobili WHERE ECU = "Da" AND tuningStage NOT IN ("Stage 2", "Stage 3")', callback);
  }

  static getAllModeliDpf(callback) {
    db.all('SELECT id, model, boja, konjskihsnaga FROM automobili WHERE ECU = "Da" AND gorivo = "Dizel"', callback);
  }

  static getAutomobilByModel(model, callback) {    
      db.get('SELECT id FROM automobili WHERE model = ?', [model], callback);        
  }

  static updateAutomobilBoja(id, boja, callback) {
    db.run('UPDATE automobili SET boja = ? WHERE id = ?', [boja, id], callback);
  }

  static updateAutomobiliKonjskeSnage(id, konjskeSnage, obrtniMoment, callback) {
    db.run('UPDATE automobili SET konjskihsnaga = ?, obrtniMoment = ?, tuning = "Da", tuningStage = "Stage 1" WHERE id = ?', [konjskeSnage, obrtniMoment, id], callback);
  }

  static updateAutomobiliKonjskeSnage2(id, konjskeSnage, obrtniMoment, callback) {
    db.run('UPDATE automobili SET konjskihsnaga = ?, obrtniMoment = ?, tuning = "Da", tuningStage = "Stage 2" WHERE id = ?', [konjskeSnage, obrtniMoment, id], callback);
  }

  static createProjekat(automobilId, model, odradjeno, callback) {
    db.run('INSERT INTO projekti (projekat_id, model, odradjeno) VALUES (?, ?, ?)', [automobilId, model, odradjeno], callback);
  }
  
  static dpf(automobilId, model, odradjeno, callback) {
    db.run('INSERT INTO projekti (projekat_id, model, odradjeno) VALUES (?, ?, ?)', [automobilId, model, odradjeno], callback);
  }
}

module.exports = Modeli;
