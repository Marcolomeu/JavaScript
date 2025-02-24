import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Suporte99',
    database : 'Leads'
});

export default pool;

/*
create database captura;

use captura;

create table usuarios (
	id int auto_increment NOT NULL primary key,
    nome varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    telefone varchar(15) NOT NULL
);

*/