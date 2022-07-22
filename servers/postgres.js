const iniparser = require("iniparser");
const pg = require("pg");

require("dotenv").config();

const { USER, HOST, DATABASE, PASS, PORT } = process.env;

const types = pg.types;
types.setTypeParser(1114, function (stringValue) {
  return stringValue;
});

const { Pool } = require("pg");

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASS,
  port: PORT,
});

const postgres = async sql => {
  let client = await pool.connect();
  let result = await client.query(sql);
  client.release();
  return result.rows;
};

module.exports = postgres;
