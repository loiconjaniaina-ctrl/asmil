// app/api/users/[id]/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hashPassword } from "@/lib/utils/hash"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const user = await prisma.personnel.findUnique({
      where: { id },
      select: { id: true, nom: true, prenom: true, email: true, role: true, createdAt: true, updatedAt: true },
    })
    if (!user) return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 })
    return NextResponse.json(user)
  } catch (error: any) {
    console.error("GET /api/users/[id] error:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const body = await req.json()
    const { nom, prenom, email, password, role } = body

    // build data
    const data: any = { nom: nom ?? undefined, prenom: prenom ?? undefined, email: email ?? undefined, role: role ?? undefined }
    if (password) data.password = await hashPassword(password)

    const updated = await prisma.personnel.update({
      where: { id },
      data,
      select: { id: true, nom: true, prenom: true, email: true, role: true, createdAt: true, updatedAt: true },
    })
    return NextResponse.json(updated)
  } catch (error: any) {
    console.error("PUT /api/users/[id] error:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    await prisma.personnel.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error("DELETE /api/users/[id] error:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
