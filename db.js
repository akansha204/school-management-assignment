const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});


// const pool = new Pool({
//   host: process.env.DB_HOST,     // e.g., 'ep-red-sky-123456.us-east-2.aws.neon.tech'
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT || 5432,
//   ssl: {
//     rejectUnauthorized: false    // Required for Neon.tech or other cloud DBs with SSL
//   }
// });

module.exports = pool;
