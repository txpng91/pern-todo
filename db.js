const Pool = require('pg').Pool;
require('dotenv').config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

// Set up configurations
const pool = new Pool(devConfig);

module.exports = pool;
