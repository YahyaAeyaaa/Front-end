const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    user:"postgres",
    password: "postgres",
    database: "pembelian_tiket_kapal"
})
 module.exports = client;