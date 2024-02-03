const express = require('express');
const automobiliController = require('../controller/projektiController');
const authenticateToken = require('../middlewares/authMiddleware');
const projektiController = require('../controller/projektiController');
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

router.get('/', projektiController.getAllModeli);
router.get('/stage1', projektiController.getAllModeliStage1);
router.get('/stage2', projektiController.getAllModeliStage2); 
router.get('/dpf', projektiController.getAllModeliDpf); 
router.put('/:id', projektiController.lakirajAutomobil);
router.put('/ugradnja/:id', projektiController.ugradiRezonantniIzduv);
router.put('/ugradnja2/:id', projektiController.stage2);
router.put('/dpf/:id', projektiController.dpf);
router.put('/dubinsko/:id', projektiController.dubinsko);
router.get('/:id', projektiController.getAutomobiliByModel);

module.exports = router;
