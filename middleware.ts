import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value
  const { pathname } = req.nextUrl

  // ✅ Autoriser librement la page login
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next()
  }

  // ✅ pas de token : bloque accès zones privées et renvoie login
  if (!token) {
    if (pathname.startsWith("/admin") || pathname.startsWith("/secretaire")) {
      return NextResponse.redirect(new URL("/admin/login", req.url))
    }
    return NextResponse.next()
  }

  try {
    const { payload } = await jwtVerify(token, SECRET)
    const role = payload.role as string

    // ✅ Secrétaire ne peut pas aller dans /admin
    if (pathname.startsWith("/admin") && role === "SECRETAIRE") {
      return NextResponse.redirect(new URL("/secretaire", req.url))
    }

    // ✅ Admin ne peut pas aller dans /secretaire
    if (pathname.startsWith("/secretaire") && role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", req.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL("/admin/login", req.url))
  }
}

export const config = {
  matcher: ["/admin/:path*", "/secretaire/:path*"],
}
