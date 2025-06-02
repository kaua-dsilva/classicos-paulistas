const database = require('../database/config');

function listarDados() {
    const instrucao = 'SELECT * FROM estatisticas';
    return database.executar(instrucao);
}

module.exports = { listarDados };
