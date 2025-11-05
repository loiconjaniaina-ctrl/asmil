"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AdminSidebar from "./components/admin-sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset className="min-h-screen bg-gray-50">
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
