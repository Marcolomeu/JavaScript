import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'user',
    password : '0101',
    database : 'clinica'
});

export default pool;