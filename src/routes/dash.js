const express = require('express');
const router = express.Router();
const dashController = require('../controllers/dash');

router.get('/dados', dashController.listarDados);

module.exports = router;
