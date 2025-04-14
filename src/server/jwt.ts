import * as jose from "jose";
import { error } from "@sveltejs/kit";
import * as dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

type JWTPayload = {
  userId: string;
  sessionId: string;
};

export const createAuthJWT = async (data: JWTPayload) => {
  const jwt = await new jose.SignJWT(data)
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(jwtSecret));

  return jwt;
};

export const verifyAuthJWT = async (token: string) => {
  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(jwtSecret)
    );
    return payload as JWTPayload;
  } catch {
    throw error(401, "invalid or missing JWT, you are not logged in");
  }
};
