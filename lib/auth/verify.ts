import { cookies } from "next/headers"
import { verifyToken } from "./jwt"

export async function verifyAuth() {
  const token = cookies().get("auth_token")?.value
  if (!token) return null

  try {
    return await verifyToken(token)
  } catch {
    return null
  }
}
