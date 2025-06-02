const quizModel = require('../models/quizModel');

function registrarResultado(req, res) {
    const { acertos, erros, pontuacao, nivel } = req.body;

    if (acertos === undefined || erros === undefined || pontuacao === undefined || !nivel) {
        return res.status(400).json({ mensagem: "Dados incompletos." });
    }

    quizModel.salvarResultado(acertos, erros, pontuacao, nivel)
        .then(() => res.status(200).json({ mensagem: "Resultado salvo com sucesso!" }))
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao salvar resultado." });
        });
}

function obterEstatisticas(req, res) {
    quizModel.buscarEstatisticas()
        .then((resultado) => res.json(resultado))
        .catch((erro) => {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar estatísticas." });
        });
}

module.exports = {
    registrarResultado,
    obterEstatisticas
};
