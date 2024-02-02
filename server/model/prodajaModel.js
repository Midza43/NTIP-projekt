const db = require('../db/baza');

class Prodaja{
  static getAllProdaja(callback) {
    db.all('SELECT automobil_id, model, modifikacije, specifikacije FROM prodaja', callback);
  }
  static updateProdaja(id, korisnickoIme, callback) {
    db.run('UPDATE prodaja SET zahtjev = ? WHERE automobil_id = ?', [korisnickoIme,id], callback);
  }
  
}

module.exports = Prodaja;
