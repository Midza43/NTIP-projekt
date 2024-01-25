const express = require('express');
const automobiliController = require('../controller/automobiliController');
const authenticateToken = require('../middlewares/authMiddleware');
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

router.get('/', automobiliController.getAllAutomobili);
router.get('/:id', automobiliController.getAutomobiliById);
router.post('/', automobiliController.createAutomobili);
router.put('/:id', automobiliController.updateAutomobili);
router.delete('/:id', automobiliController.deleteAutomobili);

module.exports = router;