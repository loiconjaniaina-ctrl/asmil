"use client"

import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Contenu principal */}
      <main className="flex-1 ml-64 p-0 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
