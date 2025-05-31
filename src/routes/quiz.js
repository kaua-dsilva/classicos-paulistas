var express = require("express")
var router = express.Router()

var quizClassicos = require("../controllers/quizClassicoController")

router.get(`/listar/:idUsuario`,
quizClassicosController.listar)
router.post("/registrar",
quizClassicosController.Cadastrar)

module.exports = router;