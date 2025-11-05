import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hashPassword } from "@/lib/utils/hash"
import { verifyToken } from "@/lib/auth/jwt"

export async function GET(req: Request) {
  // Lire token depuis cookies
  const cookie = (req as any).cookies?.get("auth_token")?.value
  const auth = cookie ? await verifyToken(cookie) : null

  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (auth.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const users = await prisma.personnel.findMany({
    select: { id: true, nom: true, prenom: true, email: true, role: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json({ users })
}

export async function POST(req: Request) {
  const cookie = (req as any).cookies?.get("auth_token")?.value
  const auth = cookie ? await verifyToken(cookie) : null

  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (auth.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { nom, prenom, email, password, role } = await req.json()

  if (!email || !password || !role) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 })
  }

  const exists = await prisma.personnel.findUnique({ where: { email } })

  if (exists) {
    return NextResponse.json({ error: "Email déjà utilisé" }, { status: 409 })
  }

  const hashed = await hashPassword(password)

  const user = await prisma.personnel.create({
    data: { nom, prenom, email, password: hashed, role },
    select: { id: true, nom: true, prenom: true, email: true, role: true, createdAt: true },
  })

  return NextResponse.json({ user }, { status: 201 })
}
