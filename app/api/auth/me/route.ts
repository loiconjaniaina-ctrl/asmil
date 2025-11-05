// app/api/auth/me/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { verifyToken } from "@/lib/auth/jwt"

export async function GET(req: Request) {
  try {
    // Read cookie from request headers — Next.js route Request doesn't expose cookies conveniently, but in app router
    // NextResponse isn't available here; instead use headers
    const cookie = req.headers.get("cookie") || ""
    const match = cookie.split(";").map(s => s.trim()).find(s => s.startsWith("auth_token="))
    const token = match ? match.split("=")[1] : null
    if (!token) return NextResponse.json({ user: null }, { status: 200 })

    const payload = await verifyToken(token)
    const user = await prisma.personnel.findUnique({
      where: { id: payload.userId as string },
      select: { id: true, nom: true, prenom: true, email: true, role: true },
    })
    return NextResponse.json({ user })
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 200 })
  }
}
