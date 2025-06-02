CREATE DATABASE classicos_paulistas;

USE classicos_paulistas;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	celular char(11),
	senha VARCHAR(50)
);


CREATE TABLE resultado_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    acertos INT NOT NULL,
    erros INT NOT NULL,
    pontuacao INT NOT NULL,
    nivel VARCHAR(10) NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP
);


