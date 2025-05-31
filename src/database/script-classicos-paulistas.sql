CREATE DATABASE classicos_paulistas;

USE classicos_paulistas;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	celular char(11),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
	idQuiz int primary key auto_increment unique,
	horario timestamp default current_timestamp,
	fk_usuario int,
	acertos int,
	erros int
	foreign key fk_usuario references usuario(id)
)



