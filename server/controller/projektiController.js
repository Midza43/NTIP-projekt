const Modeli = require('../model/projektiModel');

const projektiController = {
  getAllModeli: (req, res) => {
    Modeli.getAllModeli((err, modeli) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching modeli.' });
      }
      res.status(200).json(modeli);
    });
  },

  getAllModeliStage1: (req, res) => {
    Modeli.getAllModeliStage1((err, modeli) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching modeli.' });
      }
      res.status(200).json(modeli);
    });
  },

  getAllModeliStage2: (req, res) => {
    Modeli.getAllModeliStage2((err, modeli) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching modeli.' });
      }
      res.status(200).json(modeli);
    });
  },

  getAllModeliDpf: (req, res) => {
    Modeli.getAllModeliDpf((err, modeli) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching modeli.' });
      }
      res.status(200).json(modeli);
    });
  },

  getAutomobiliByModel: (req, res) => {
      const autoModel = req.body;
      Modeli.getAutomobilByModel(autoModel, (err, modeli) => {
        if (err) {
          return res.status(500).json({ error: 'Error fetching automobil from the database.' });
        }
        if (!modeli) {
          return res.status(404).json({ error: 'Automobili not found' });
        }
        res.json(modeli);
      });
    },
    

  lakirajAutomobil: async (req, res) => {
    const id = req.params.id;
    const { model, boja } = req.body;

    try {      
      
      await Modeli.updateAutomobilBoja(id, boja);
      
      await Modeli.createProjekat(id, model, 'Lakiranje');

      return res.status(200).json({ success: true, message: 'Successfully updated color and added new project.' });
    } catch (error) {
      console.error('Error lakirajAutomobil:', error.message);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  },

  ugradiRezonantniIzduv: async (req, res) => {
    const id = req.params.id;
    const { model, konjskihsnaga, obrtniMoment } = req.body;
    try {      
      
      await Modeli.updateAutomobiliKonjskeSnage(id, konjskihsnaga, obrtniMoment);
      
      await Modeli.createProjekat(id, model, `Stage1 tuning +30ks = ${konjskihsnaga} i +30% Nm`);

      return res.status(200).json({ success: true, message: 'Successfully updated and added new project.' });
    } catch (error) {
      console.error('Error ugradiRezonantniIzduv:', error.message);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  },
  stage2: async (req, res) => {
    const id = req.params.id;
    const { model, konjskihsnaga, obrtniMoment } = req.body;
    try {      
      
      await Modeli.updateAutomobiliKonjskeSnage2(id, konjskihsnaga, obrtniMoment);
      
      await Modeli.createProjekat(id, model, `Stage 2 tuning +100ks = ${konjskihsnaga} i +50% Nm`);
  
      return res.status(200).json({ success: true, message: 'Successfully updated and added new project.' });
    } catch (error) {
      console.error('Error ugradiRezonantniIzduv:', error.message);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  },
  dpf: async (req, res) => {
    const id = req.params.id;
    const { model } = req.body;
    try {      
      
      await Modeli.createProjekat(id, model, `Iskljucen DPF!`);
  
      return res.status(200).json({ success: true, message: 'Successfully updated and added new project.' });
    } catch (error) {
      console.error('Error ugradiRezonantniIzduv:', error.message);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  },
};



module.exports = projektiController;
