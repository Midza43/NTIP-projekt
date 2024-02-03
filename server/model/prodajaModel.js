const db = require('../db/baza');

class Prodaja{
  static getAllProdaja(callback) {
    db.all('SELECT automobil_id, model, modifikacije, specifikacije FROM prodaja', callback);
  }
  
  
}

module.exports = Prodaja;
