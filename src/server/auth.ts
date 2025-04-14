import { db } from "./db";
import { session} from "$server/schema";
import { createAuthJWT, verifyAuthJWT } from "./jwt";
import { eq } from "drizzle-orm";
import { error } from "@sveltejs/kit";
import { addDays } from "date-fns";
import { generateId } from "lucia";

export async function createSession(userId: string) {
  const sessionId = generateId(7);
  const expiresAt = addDays(new Date(), 2);

  await db.insert(session).values({
    id: sessionId,
    userId,
    expiresAt,
  });

  const jwtPayLoad = {
    sessionId,
    userId,
  };

  return await createAuthJWT(jwtPayLoad);
}

export async function validateSession(token: string) {
  try {
    const payload = await verifyAuthJWT(token);
    const sessionData = await db
      .select()
      .from(session)
      .where(eq(session.id, payload.sessionId))
      .limit(1);

    if (sessionData.length == 0) throw error(401, "Sessão inválida");

    if (new Date(sessionData[0].expiresAt) < new Date()) {
      await db.delete(session).where(eq(session.id, payload.sessionId));
      throw error(401, "Sessão expirada");
    }

    return {
      sessionId: sessionData[0].id,
      userId: sessionData[0].userId,
    };
  } catch (err) {
    throw error(401, "Não autenticado");
  }
}

export async function deleteSession(sessionId:string){
    await db.delete(session).where(eq(session.id, sessionId))
}