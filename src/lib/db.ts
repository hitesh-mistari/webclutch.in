import pg from 'pg';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const connectionString = process.env.DATABASE_URL;

const globalForPool = global as unknown as { pool: pg.Pool };

let poolInstance: pg.Pool;

if (!globalForPool.pool) {
  poolInstance = new pg.Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }, // Bypass SSL issues for hosted DBs
  });
  if (process.env.NODE_ENV !== 'production') {
    globalForPool.pool = poolInstance;
  }
} else {
  poolInstance = globalForPool.pool;
}

export const pool = poolInstance;

export async function query(text: string, params?: any[]) {
  return pool.query(text, params);
}
