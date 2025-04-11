import bcrypt from "bcrypt";
import { db } from "$server/db";
import { users } from "$server/schema";
import { createAuthJWT } from "$server/jwt";
import type { Actions } from "@sveltejs/kit";
import { generateId } from "lucia";
import { eq } from "drizzle-orm";

export const config = {
  runtime: "nodejs18.x",
};

export const actions: Actions = {
  register: async (event) => {
    const formData = await event.request.formData();

    const data = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const hash = bcrypt.hashSync(data.password?.toString(), 10);
    const userId = generateId(7);

    try {
      await db.insert(users).values({
        id: userId,
        username: data.username.toString(),
        email: data.email.toString(),
        password: hash,
      });

      const token = await createAuthJWT({
        username: data.username.toString(),
        email: data.email.toString(),
        id:userId,
      });

      event.cookies.set("auth_token", token,{
        path:"/"
      })

         const [novoUsuario] = await db.select()
            .from(users)
            .where(eq(users.id, userId))
            .limit(1);

            return {
                success: true,
                message: 'Usuario cadastrado com sucesso!',
                empresa: novoUsuario
    };

    } catch (error) {
      console.error("Erro ao cadastrar empresas:", error);
    }
  },
} satisfies Actions;
