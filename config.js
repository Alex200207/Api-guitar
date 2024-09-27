import { createPool } from "mysql2";

import dotenv from 'dotenv';
dotenv.config();

const configBase = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});


configBase.getConnection((err, connection) => {
    if (err) {
        console.error('ERROR: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión a la base de datos fue cerrada.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión a la base de datos fue rechazada.');
        }
    }
    if (connection) {
        connection.release();
    }
})

const config = {
    ...configBase,
    query: (sql, params, callback) => {
        console.log(`Ejecutando consulta: ${sql} con los parámetros: ${JSON.stringify(params)}`);
        configBase.query(sql, params, callback);
    }
};

export default config;
