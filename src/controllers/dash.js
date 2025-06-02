const dashModel = require('../models/dashModel');

function listarDados(req, res) {
    dashModel.listarDados()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro: 'Erro ao listar dados' });
        });
}

module.exports = { listarDados };
