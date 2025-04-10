import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import type { MySql2Database } from "drizzle-orm/mysql2";
const password = process.env.DB_PASSWORD

const poolConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "cadastrodeempresas",
  password: password,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const db: MySql2Database = drizzle(poolConnection);
