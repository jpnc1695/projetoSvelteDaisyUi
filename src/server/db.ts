import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import type { MySql2Database } from "drizzle-orm/mysql2";
import * as dotenv from "dotenv";

dotenv.config();

const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const bancoDeDados = process.env.DB_DATABASE;
// const user = process.env.DB_USER;

const poolConnection = mysql.createPool({
  host: host,
  user: "root",
  database: bancoDeDados,
  password: password,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const db: MySql2Database = drizzle(poolConnection);
