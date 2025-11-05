// app/api/auth/login/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { verifyPassword } from "@/lib/auth/password"
import { createToken } from "@/lib/auth/jwt"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) return NextResponse.json({ error: "Données manquantes" }, { status: 400 })

    const user = await prisma.personnel.findUnique({ where: { email } })
    if (!user) return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })

    const valid = await verifyPassword(password, user.password)
    if (!valid) return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })

    const token = await createToken({ userId: user.id, email: user.email, role: user.role })

    const res = NextResponse.json({
      message: "Connexion réussie",
      user: { id: user.id, nom: user.nom, prenom: user.prenom, email: user.email, role: user.role },
    })

    // cookie HTTPOnly, sameSite lax, 7 jours
    res.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    })

    return res
  } catch (err) {
    console.error("POST /api/auth/login error:", err)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
