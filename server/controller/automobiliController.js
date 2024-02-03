const Automobili = require('../model/automobiliModel');
const Modeli = require('../model/zadaciModel');
const automobiliController = {
    getAllAutomobili: (req, res) => {
      Automobili.getAll((err, automobili) => {
        if (err) {
          return res.status(500).json({ error: 'Error fetching automobili.' + err });
        }
        res.json(automobili);
      });
    },
  
    getAutomobiliById: (req, res) => {
      const automobilId = req.params.id;
      Automobili.getById(automobilId, (err, Automobili) => {
        if (err) {
          return res.status(500).json({ error: 'Error fetching automobil from the database.' });
        }
        if (!Automobili) {
          return res.status(404).json({ error: 'Automobili not found' });
        }
        res.json(Automobili);
      });
    },
  
    createAutomobili: (req, res) => {
      const newAutomobili = req.body;
      Automobili.create(newAutomobili, (err, kreiraniAutomobil) => {
        if (err) {
          return res.status(500).json({ error: 'Error adding autombili to the database.' });
        }
        res.status(201).json(kreiraniAutomobil);
      });
    },
  
    updateAutomobili: (req, res) => {
      const AutomobiliId = req.params.id;
      const updatedAutomobili = req.body;

      Automobili.update(AutomobiliId, updatedAutomobili, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error updating automobili in the database.' });
        }
        
        res.json(true);
      });
    },
  
    deleteAutomobili: (req, res) => {
      const AutomobiliId = req.params.id;
      console.log(res)
      Automobili.delete(AutomobiliId, (err, deletedAutomobili) => {
        if (err) {
          return res.status(500).json({ error: 'Error deleting automobili from the database.' });
        }
        if (!deletedAutomobili) {
          return res.status(404).json({ error: 'Automobili not found' });
        }
        res.json(deletedAutomobili);
      });
    },
    prodajAutomobili: async (req, res) => {
      const automobilId = req.params.id;
  
      try {        
        const automobilData = await new Promise((resolve, reject) => {
          Automobili.getById(automobilId, (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });  
        
        const zadaciData = await new Promise((resolve, reject) => {
          Modeli.getZadaciById(automobilId, (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });  
        
        const model = automobilData.model;          
        const specifikacijeString = `Specifikacije automobila su: ${automobilData.model}. ${automobilData.gorivo} gorivo. Mjenjač je ${automobilData.transmisija}. Pogon automobila je ${automobilData.pogon}. Godište automobila je ${automobilData.godiste}. Automobil ima ${automobilData.konjskihsnaga} konjskih snaga. Obrtni moment motora je ${automobilData.obrtniMoment} Nm. Boja automobila je ${automobilData.boja}.`;
        const modifikacijeString =  `Na automobilu su odradjene sljedece modifikacije: ${zadaciData.map((zadatak) => zadatak.odradjeno)}`;     
        Automobili.prodaj(automobilId, model, modifikacijeString, specifikacijeString, (err, result) => {
          if (err) {
            console.error('Error performing insert:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
          }
  
          if (result.changes > 0) {
            console.log('Insert successful');
            return res.status(200).json({ success: true, message: 'Successfully set on sale.' });
          } else {
            console.log('Insert failed');
            return res.status(200).json({ success: false, message: 'Vec je na prodaji.' });
          }
        });
      } catch (error) {
        console.error('Outer try-catch block error:', error.message);
        return res.status(500).json({ error: `Internal server error: ${error.message}` });
      }
    },
  };
  
  module.exports = automobiliController;