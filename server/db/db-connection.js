const { Pool } = require('pg');
const db = new Pool({
    user: 'lexllanes',
    host: 'localhost',
    database: 'animals',
    password: 'hyol33ung',
    port: 5432
  });

  module.exports = db;