const express = require('express');
const prodajaController = require('../controller/prodajaController');
const router = express.Router();


router.get('/', prodajaController.getAllProdaja);


module.exports = router;