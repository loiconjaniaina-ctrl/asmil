"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useAuth } from "@/lib/contexts/auth-context"

// toutes tes import UI ici...
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, User2, UserPlus, Info, Edit, Trash2, Plus } from "lucide-react"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger
} from "@/components/ui/dialog"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle,
  AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

export default function AdminDashboard() {
  const router = useRouter()
  const { user, logout, loading } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (mounted && !loading && !user) router.push("/login")
  }, [mounted, loading, user])

  if (!mounted || loading) return <div>Chargement...</div>
  if (!user) return null

  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background px-4">
        <h1 className="text-xl font-bold">Administration ASMIL Toliara</h1>
      </header>

      <main className="flex-1 space-y-8 p-6 bg-muted/20 min-h-screen">
        
        {/* 📊 STATS */}
        <div className="flex gap-6 w-full">
          {[ 
            { title:"Total Utilisateurs", icon:Users, color:"bg-blue-100 text-blue-600", value:0 },
            { title:"Administrateurs", icon:User2, color:"bg-red-100 text-red-600", value:0 },
            { title:"Secrétaires", icon:UserPlus, color:"bg-green-100 text-green-600", value:0 },
          ].map((stat,i) => (
              <Card key={i} className="flex-1">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className={`rounded-lg p-2 ${stat.color}`}><stat.icon className="h-5 w-5" /></div>
                </CardHeader>
                <CardContent><div className="text-3xl font-bold">{stat.value}</div></CardContent>
              </Card>
            )
          )}
        </div>

        {/* 👥 TABLE UTILISATEURS */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Gestion des utilisateurs</CardTitle>
              <CardDescription>Créer, modifier et supprimer des comptes</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild><Button><Plus className="mr-2 h-4 w-4" />Nouvel Utilisateur</Button></DialogTrigger>
              <DialogContent className="max-w-md">
                {/* Form création */}
                ...
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
                  <TableCell>loic</TableCell>
                  <TableCell>loic@gmail.com</TableCell>
                  <TableCell>12345</TableCell>
                  <TableCell><Badge>Administrateur</Badge></TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Button variant="ghost" size="sm"><Info className="h-4 w-4 text-green-600"/></Button>
                    <Button variant="ghost" size="sm"><Edit className="h-4 w-4 text-blue-600"/></Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4 text-red-600"/></Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        ...
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </>
  )
}

