const Pool = require('pg').Pool;

// Set up configurations
const pool = new Pool({
  user: 'postgres',
  password: '91Pet@rva',
  host: 'localhost',
  port: 5432,
  database: 'todolist',
});

module.exports = pool;
