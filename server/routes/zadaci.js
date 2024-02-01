const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const zadaciController = require('../controller/zadaciController');
const router = express.Router();

router.use(authenticateToken);

/**
 * @swagger
 * /api/automobili:
 *   get:
 *     summary: Get all automobii
 *     description: Retrieve a list of all automobili.
 *     responses:
 *       '200':
 *         description: A successful response with the list of automobili.
 */

router.get('/', zadaciController.getAllZadaci);

module.exports = router;
