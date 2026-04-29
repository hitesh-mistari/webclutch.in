import { Pool } from 'pg';

let connectionString = process.env.DATABASE_URL;

// Clean up connection string if it contains sslmode=require which can cause issues with self-signed certs in Node
if (connectionString && connectionString.includes('sslmode=require')) {
  connectionString = connectionString.replace('?sslmode=require', '').replace('&sslmode=require', '');
}

export const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function query(text, params) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  // console.log('executed query', { text, duration, rows: res.rowCount });
  return res;
}
