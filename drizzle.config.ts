import 'dotenv/config';
import { Config } from 'drizzle-kit';


const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL não está definida nas variáveis de ambiente');
}

export default {
    out: './drizzle',
    schema: './src/server/schema.ts',
    dialect: 'mysql',
    dbCredentials: {
      url: databaseUrl // Agora garantidamente uma string
    }
  } satisfies Config;