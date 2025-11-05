"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { AuthGuard } from "@/components/auth-guard"
import { useAuth } from "@/lib/contexts/auth-context"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Plus,
  Trash2,
  Users,
  Edit,
  GraduationCap,
  BookOpen,
  CreditCard,
  Activity,
  User2,
  UserPlus,
} from "lucide-react"
// import type { User, CreateUserData, UpdateUserData } from "@/lib/types/user"

export default function AdminPage() {
  return (
    <AuthGuard allowedRoles={["admin"]}>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <AdminDashboard />
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}

function AdminDashboard() {

  const router = useRouter()
  const { user, logout, loading } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router, mounted])

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("login")
  }

  return (
    <>
      {/* Header modernisé */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background px-4">
        <h1 className="text-xl font-bold">Administration ASMIL Toliara</h1>
      </header>

      {/* Contenu principal */}
      <main className="flex-1 space-y-8 p-6 bg-muted/20 min-h-screen">
        {/* Section stats */}
<div className="flex gap-6 w-full">
  {[
    {
      title: "Total Utilisateurs",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
      value: length,
      subtitle: "Tous les comptes actifs",
    },
    {
      title: "Administrateurs",
      icon: User2,
      color: "bg-red-100 text-red-600",
      value: length,
      subtitle: "Comptes administrateurs",
    },
    {
      title: "Secrétaires",
      icon: UserPlus,
      color: "bg-green-100 text-green-600",
      value: length,
      subtitle: "Comptes secrétaires",
    },
  ].map((stat, i) => (
    <Card key={i} className="flex-1 border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
        <div className={`rounded-lg p-2 ${stat.color}`}>
          <stat.icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2">
        <div className="text-3xl font-bold">{stat.value}</div>
        <div className="text-sm text-gray-500">{stat.subtitle}</div>
      </CardContent>
    </Card>
  ))}
</div>



        {/* Table utilisateurs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Gestion des utilisateurs</CardTitle>
              <CardDescription>Créer, modifier et supprimer des comptes</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Nouvel Utilisateur
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                // Contenu du dialogue de création d'utilisateur
                    <DialogHeader>
                      <DialogTitle>Créer un nouvel utilisateur</DialogTitle>
                      <DialogDescription>Ajoutez un nouveau compte utilisateur au système</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input
                          id="name"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Adresse email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean@asmil-toliara.mg"
                          />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Input
                          id="address"
                          placeholder="Toliara, Madagascar"
                          />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Numéro de téléphone</Label>
                        <Input
                          id="phone"
                          placeholder="+261 34 00 000 00"
                          />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Rôle</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="secretary">Secrétaire</SelectItem>
                            <SelectItem value="admin">Administrateur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">
                        Annuler
                      </Button>
                      <Button>Créer</Button>
                    </div>
                  </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>Rôle</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                
                  <TableRow>
                    <TableCell className="font-medium">loic</TableCell>
                    <TableCell>loic@gmail.com</TableCell>
                    <TableCell>12345</TableCell>
                    <TableCell>
                      <Badge>
                        Administrateur" : "Secrétaire"
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        >
                        <Info className="w-4 h-4 text-green-600" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                      >
                        <Edit className="w-4 h-4 text-blue-600" />

                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                            <AlertDialogDescription>
                              Êtes-vous sûr de vouloir supprimer l'utilisateur <strong>loic</strong> ? Cette
                              action est irréversible.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Supprimer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      {/* Dialogue modification utilisateur */}
      <Dialog>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Modifier l'utilisateur</DialogTitle>
            <DialogDescription>Modifiez les informations de l'utilisateur</DialogDescription>
          </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Nom complet</Label>
                <Input
                  id="edit-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-email">Adresse email</Label>
                <Input
                  id="edit-email"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-address">Adresse</Label>
                <Input
                  id="edit-address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-phone">Numéro de téléphone</Label>
                <Input
                  id="edit-phone"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-role">Rôle</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="secretary">Secrétaire</SelectItem>
                    <SelectItem value="admin">Administrateur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          <div className="flex justify-end gap-2">
            <Button>
              Annuler
            </Button>
            <Button>Enregistrer</Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Dialogue vue rapide utilisateur */}
      <Dialog>
  <DialogContent className="max-w-md">
    <DialogHeader>
      <DialogTitle>Informations utilisateur</DialogTitle>
      <DialogDescription>Vue rapide des informations de l'utilisateur</DialogDescription>
    </DialogHeader>
    
      <div className="space-y-4 py-4">
        <div><strong>Nom :</strong> name</div>
        <div><strong>Email :</strong> email</div>
        <div><strong>Téléphone :</strong> phone</div>
        <div><strong>Adresse :</strong> address</div>
        <div><strong>Rôle :</strong> "admin" ? "Administrateur" ou "Secrétaire"</div>
      </div>
    
    <div className="flex justify-end">
      <Button variant="outline">Fermer</Button>
    </div>
  </DialogContent>
</Dialog>

    </>
  )
}
