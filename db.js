const Pool = require('pg').Pool;
const pool = new Pool({
  user: "postgres",
  password: "emokid",
  host: "localhost",
  port: 5432,
  database: "portfolioDB"
});

module.exports = pool;