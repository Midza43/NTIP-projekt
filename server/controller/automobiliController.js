const Automobili = require('../model/automobiliModel');

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
  };
  
  module.exports = automobiliController;