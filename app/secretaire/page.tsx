"use client"

import { AuthGuard } from "@/components/auth-guard"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

import SecretaireSidebar from "./components/secretaire-sidebar"
import SecretaireDashboard from "./components/secretaire-dashboard"

export default function SecretairePage() {
  return (
    <AuthGuard allowedRoles={["SECRETAIRE"]}>
      <SidebarProvider>
        <SecretaireSidebar />
        <SidebarInset>
          <SecretaireDashboard />
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}
