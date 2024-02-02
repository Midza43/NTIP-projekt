const Modeli = require('../model/zadaciModel');

const zadaciController = {
  getAllZadaci: (req, res) => {
    Modeli.getAllZadaci((err, modeli) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching modeli.' });
      }
      res.status(200).json(modeli);
    });
  },
  

};



module.exports = zadaciController;
