"use client"

import { AuthGuard } from "@/components/auth-guard"
import AdminDashboard from "./components/admin-dashboard"

export default function AdminPage() {
  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <AdminDashboard />
    </AuthGuard>
  )
}
