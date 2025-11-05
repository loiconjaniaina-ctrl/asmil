"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  UserPlus,
  FileText,
  Calendar,
  CreditCard,
  UserIcon,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/contexts/auth-context"


export default function AdminSidebar() {
  
  const pathname = usePathname()
  const router = useRouter()
  const { logout } = useAuth()

  // const handleLogout = () => {
  //   logout()
  //   router.push("/login")
  // }

  const menuItems = [
    { title: "Tableau de bord", icon: LayoutDashboard, href: "/admin" },
  ]

  return (
    <aside
      className="
        fixed left-0 top-0 h-screen w-64
        flex flex-col
        border-r bg-white text-gray-800 shadow-md
        z-20
      "
    >
      {/* HEADER */}
      <div className="border-b p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-white shadow-sm">
            <GraduationCap className="size-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">ASMIL Toliara</h2>
            <p className="text-xs text-gray-500">Institut de gestion</p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Plateforme
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
                    isActive && "bg-gray-100 text-red-600 font-medium"
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.title}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* FOOTER */}
      <div className="border-t p-4">
        <Link href="/admin/profile">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900 mb-2 transition-colors",
              pathname === "/admin/profile" && "bg-gray-100 text-red-600 font-medium"
            )}
          >
            <UserIcon className="mr-3 h-5 w-5" />
            Profil
          </Button>
        </Link>

        
<button onClick={async () => { await logout(); router.push("/login") }}>Déconnexion</button>


        <div className="mt-4 flex items-center gap-3 rounded-lg bg-gray-100 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold">
            <h1>A</h1>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium text-gray-900">Admin</p>
            <p className="truncate text-xs text-gray-500">admin@asmil.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
