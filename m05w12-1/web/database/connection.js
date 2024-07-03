const pg = require('pg');

const Client = pg.Client; // one connection to the rdbms
// const Pool = pg.Pool; // collection of clients (5); managed

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const client = new Client(config); // new Pool(config)

client.connect();

module.exports = client;
