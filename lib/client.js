// load env
require('dotenv').config();
// PG after npm i pg
const pg = require('pg');
//use PG
const Client = pg.Client;
// create database
const client = new Client(process.env.DATABASE_URL);
// export client
module.exports = client;