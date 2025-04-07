import { drizzle } from "drizzle-orm/planetscale-serverless";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"cadastrodeempresas"
})

const db = drizzle({client:connection})