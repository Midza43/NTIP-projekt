const db = require('../db/baza');

class Modeli {
  static getAllZadaci(callback) {
    db.all('SELECT id, model, odradjeno FROM projekti', callback);
  }
  
  
}

module.exports = Modeli;
