"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/contexts/auth-context"
import type { UserRole } from "@/lib/types/user"

interface AuthGuardProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
}

export function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) return

    if (!user) {
      router.push("/login")
      return
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      router.push("/login")
      return
    }
  }, [user, loading, allowedRoles, router])

  if (loading) return <p>Chargement...</p>
  if (!user) return null

  return <>{children}</>
}
