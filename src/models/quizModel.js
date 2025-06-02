const db = require('../database/config');

function salvarResultado(acertos, erros, pontuacao, nivel) {
    const instrucao = `
        INSERT INTO resultado_quiz (acertos, erros, pontuacao, nivel, data_hora)
        VALUES (${acertos}, ${erros}, ${pontuacao}, '${nivel}', NOW());
    `;
    return db.executar(instrucao);
}

function buscarEstatisticas() {
    const instrucao = `
        SELECT 
            COUNT(*) AS totalTentativas,
            AVG(pontuacao) AS mediaPontuacao,
            SUM(CASE WHEN pontuacao >= 80 THEN 1 ELSE 0 END) AS totalExpert,
            SUM(CASE WHEN pontuacao < 50 THEN 1 ELSE 0 END) AS totalFracos
        FROM resultado_quiz;
    `;
    return db.executar(instrucao);
}

module.exports = {
    salvarResultado,
    buscarEstatisticas
};
