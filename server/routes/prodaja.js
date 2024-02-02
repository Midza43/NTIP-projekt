const express = require('express');
const prodajaController = require('../controller/prodajaController');
const router = express.Router();


router.get('/', prodajaController.getAllProdaja);
router.put('/:id', prodajaController.updateProdaja);

module.exports = router;