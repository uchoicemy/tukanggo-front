import mysql from "mysql2/promise";

let pool;

async function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT || 3306),
      waitForConnections: true,
      connectionLimit: 10,
      connectTimeout: 10000,
    });
  }
  return pool;
}

const db = {
  prepare(sql) {
    return {
      async all(params = []) {
        const pool = await getPool();
        const [rows] = await pool.query(sql, params);
        return rows;
      },

      async get(params = []) {
        const pool = await getPool();
        const [rows] = await pool.query(sql, params);
        return rows[0] ?? null;
      },

      async run(params = []) {
        const pool = await getPool();
        const [result] = await pool.query(sql, params);
        return result;
      },
    };
  },
};

export default db;
