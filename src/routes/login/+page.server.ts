import { db } from "$server/db";
import { users } from "$server/schema";
import { eq } from "drizzle-orm";
import { createSession } from "$server/auth";
import bcrypt from "bcrypt";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  login: async ({ request, cookies }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    // Validação básica dos campos
    if (!username || !password) {
      return fail(400, {
        message: "Username e password são obrigatórios",
        missing: {
          username: !username,
          password: !password,
        },
      });
    }

    try {
      // Busca o usuário no banco de dados
      const user = await db
        .select()
        .from(users)
        .where(eq(users.username, username.toString()))
        .limit(1);

      if (user.length === 0) {
        return fail(401, {
          message: "Credenciais inválidas",
        });
      }

      const userData = user[0];

      // Verifica a senha
      const passwordMatch = await bcrypt.compare(
        password.toString(),
        userData.hashedPassword
      );

      if (!passwordMatch) {
        return fail(401, {
          message: "Credenciais inválidas",
        });
      }

      // Cria a sessão
      const token = await createSession(userData.id);

      // Configura o cookie
      cookies.set("session_token", token, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // 30 dias
      });

    } catch (err) {
      console.error("Login error:", err);
      return fail(500, {
        message: "Ocorreu um erro durante o login",
      });
    }

    // Redireciona após o login bem-sucedido
    throw redirect(303, "/");
  },
};