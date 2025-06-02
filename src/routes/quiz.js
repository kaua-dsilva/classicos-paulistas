const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/registrar', quizController.registrarResultado);
router.get('/estatisticas', quizController.obterEstatisticas);

module.exports = router;