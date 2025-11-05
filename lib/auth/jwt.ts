// lib/auth/jwt.ts
import { SignJWT, jwtVerify, type JWTPayload } from "jose"

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function createToken(payload: { userId: string; email: string; role: string }) {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET)
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, SECRET)
  return payload as JWTPayload & { userId?: string; email?: string; role?: string }
}
