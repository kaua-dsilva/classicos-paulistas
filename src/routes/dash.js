const express = require('express');
const router = express.Router();
const dashController = require('../controllers/dash');
const quizController = require("../controllers/quizController")

router.get('/dados', dashController.listarDados);
router.get("/estatisticas", quizController.obterEstatisticas)
module.exports = router;
