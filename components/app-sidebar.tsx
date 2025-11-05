"use client"

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  UserPlus,
  FileText,
  Calendar,
  CreditCard,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useAuth } from "@/lib/contexts/auth-context"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "Tableau de bord", url: "/dashboard", icon: LayoutDashboard },
  { title: "Étudiants", url: "/dashboard/students", icon: Users },
  { title: "Enseignants", url: "/dashboard/teachers", icon: GraduationCap },
  { title: "Cours", url: "/dashboard/courses", icon: BookOpen },
  { title: "Inscriptions", url: "/dashboard/enrollments", icon: UserPlus },
  { title: "Notes", url: "/dashboard/grades", icon: FileText },
  { title: "Présences", url: "/dashboard/attendance", icon: Calendar },
  { title: "Paiements", url: "/dashboard/payments", icon: CreditCard },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  // const getUserInitials = (name: string) =>
  //   name
  //     .split(" ")
  //     .map((n) => n[0])
  //     .join("")
  //     .toUpperCase()
  //     .slice(0, 2)

  return (
    <Sidebar className="border-r bg-white text-gray-800 shadow-sm">
      {/* --- Header --- */}
      <SidebarHeader className="border-b bg-gray-50">
        <div className="flex items-center gap-2 px-3 py-4">
          <div className="flex size-9 items-center justify-center rounded-lg bg-red-600 text-white shadow-sm">
            <GraduationCap className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">ASMIL Toliara</span>
            <span className="text-xs text-gray-500">Institut de gestion</span>
          </div>
        </div>
      </SidebarHeader>

      {/* --- Contenu principal --- */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase text-gray-500 font-semibold px-3 mt-2 mb-1">
            Plateforme
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={cn(
                      "w-full justify-start rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
                      pathname === item.url && "bg-gray-100 text-red-600 font-medium"
                    )}
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* --- Footer avec profil + bouton Déconnexion --- */}
      <SidebarFooter className="border-t bg-gray-50 p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3 rounded-md bg-gray-100 p-3">
              <Avatar className="size-9">
                <AvatarFallback className="bg-red-600 text-white text-sm">
                  <h1>Loic</h1>
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col overflow-hidden text-sm">
                <span className="truncate font-semibold text-gray-900">loic</span>
                <span className="truncate text-xs text-gray-500">loic@gmail.com</span>
              </div>
            </div>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
              onClick={handleLogout}
            >
              <LogOut className="size-4" />
              Déconnexion
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
