const express = require('express');
const router = express.Router();
const rekamMedisController = require('../controllers/rekamMedisController');

router.get('/rekam-medis', rekamMedisController.getAllRekamMedis);
router.get('/rekam-medis/:id', rekamMedisController.getRekamMedisById);
router.post('/rekam-medis', rekamMedisController.createRekamMedis);
router.put('/rekam-medis/:id', rekamMedisController.updateRekamMedis);
router.delete('/rekam-medis/:id', rekamMedisController.deleteRekamMedis);

module.exports = router;
