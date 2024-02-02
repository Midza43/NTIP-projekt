const Prodaja = require('../model/prodajaModel.js');

const prodajaController = {
  getAllProdaja: (req, res) => {
    Prodaja.getAllProdaja((err, modeli) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching modeli.' });
      }
      res.status(200).json(modeli);
    });
  },
  updateProdaja: (req, res) => {
    const id = req.params.id;
    const korisnickoIme  = req.body;
    Prodaja.updateProdaja(korisnickoIme, id, (err, modeli) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching modeli.' });
      }
      res.status(200).json(modeli);
    });
  },

};



module.exports = prodajaController;
