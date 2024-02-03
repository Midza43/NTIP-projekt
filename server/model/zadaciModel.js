const db = require('../db/baza');

class Modeli {
  static getAllZadaci(callback) {
    db.all('SELECT id, model, odradjeno FROM projekti', callback);
  }
  static getZadaciById(projekat_id, callback) {
    db.all('SELECT id, model, odradjeno FROM projekti WHERE projekat_id = ?', [projekat_id], callback);
  }
  
  
}

module.exports = Modeli;
