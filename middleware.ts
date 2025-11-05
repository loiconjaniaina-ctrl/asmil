import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "@/lib/auth/jwt"

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value
  const url = req.nextUrl.clone()

  // ✅ Autorise login et routes auth
  if (url.pathname.startsWith("/login") || url.pathname.startsWith("/api/auth")) {
    return NextResponse.next()
  }

  // ✅ Vérifie token pour routes protégées
  if (
    url.pathname.startsWith("/admin") ||
    url.pathname.startsWith("/secretaire") ||
    url.pathname.startsWith("/api/users")
  ) {
    if (!token) {
      // Si route API
      if (url.pathname.startsWith("/api")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
      // Sinon page -> redirect login
      return NextResponse.redirect(new URL("/login", req.url))
    }

    const payload = await verifyToken(token)
    if (!payload) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    // ✅ Protection admin
    if (url.pathname.startsWith("/admin") && payload.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    // ✅ Protection secrétaire
    if (url.pathname.startsWith("/secretaire") && payload.role !== "SECRETAIRE") {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }

  return NextResponse.next()
}

// ✅ Les routes protégées
export const config = {
  matcher: [
    "/admin/:path*",
    "/secretaire/:path*",
    "/api/users/:path*",
  ],
}
