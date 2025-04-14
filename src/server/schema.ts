import { mysqlTable, varchar, text, datetime } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const empresas = mysqlTable("empresas", {
  id: varchar("id", { length: 36 }).primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  cnpj: varchar("cnpj", { length: 14 }).notNull().unique(),
  email: varchar("email", { length: 255 }),
  telefone: varchar("telefone", { length: 20 }),
  endereco: text("endereco").notNull(),
  createdAt: datetime("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  username: varchar("username", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  hashedPassword: varchar("password", { length: 60 }).notNull(),
  createdAt: datetime("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const session = mysqlTable("session", {
  id: varchar("id", { length: 36 }).primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: datetime("expires_at").notNull()
})

