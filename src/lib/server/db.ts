import { drizzle } from "drizzle-orm/planetscale-serverless";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE
})

const db = drizzle({client:connection})