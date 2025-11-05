"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type Role = "ADMIN" | "SECRETAIRE"

type User = {
  id: string
  nom: string
  prenom: string
  email: string
  role: Role
  createdAt: string
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [editUser, setEditUser] = useState<User | null>(null)

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    role: "SECRETAIRE"
  })

  // ✅ Fetch users avec fallback correct
  const fetchUsers = async () => {
  try {
    const res = await fetch("/api/users", { credentials: "include" })

    if (!res.ok) throw new Error(await res.text())

    const data = await res.json()
    if (Array.isArray(data.users)) {
      setUsers(data.users)
    } else {
      console.error("Réponse API inattendue:", data)
      setUsers([])
    }
  } catch (e) {
    console.error(e)
    alert("Erreur chargement utilisateurs")
    setUsers([])
  } finally {
    setLoading(false)
  }
}


  useEffect(() => { fetchUsers() }, [])

  // ✅ Submit create
  const handleCreate = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(await res.text())

      setShowCreate(false)
      setForm({ nom: "", prenom: "", email: "", password: "", role: "SECRETAIRE" })
      fetchUsers()
    } catch {
      alert("Erreur création utilisateur")
    }
  }

  // ✅ Submit edit
  const handleEdit = async (e: any) => {
    e.preventDefault()
    if (!editUser) return
    try {
      const res = await fetch(`/api/users/${editUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(await res.text())
      
      setShowEdit(false)
      setEditUser(null)
      fetchUsers()
    } catch {
      alert("Erreur modification utilisateur")
    }
  }

  // ✅ Delete
  const handleDelete = async (id: string) => {
    if (!confirm("Confirmer suppression ?")) return
    await fetch(`/api/users/${id}`, { method: "DELETE" })
    fetchUsers()
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>

        {/* CREATE BUTTON */}
        <Dialog open={showCreate} onOpenChange={setShowCreate}>
          <DialogTrigger asChild>
            <Button>Nouvel utilisateur</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Créer utilisateur</DialogTitle></DialogHeader>
            
            <form onSubmit={handleCreate} className="space-y-3">
              <div><Label>Nom</Label><Input value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })}/></div>
              <div><Label>Prénom</Label><Input value={form.prenom} onChange={e => setForm({ ...form, prenom: e.target.value })}/></div>
              <div><Label>Email</Label><Input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/></div>
              <div><Label>Mot de passe</Label><Input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}/></div>
              
              <div>
                <Label>Rôle</Label>
                <Select value={form.role} onValueChange={v => setForm({ ...form, role: v as Role })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ADMIN">ADMIN</SelectItem>
                    <SelectItem value="SECRETAIRE">SECRETAIRE</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" type="button" onClick={() => setShowCreate(false)}>Annuler</Button>
                <Button type="submit">Créer</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader><CardTitle>Utilisateurs</CardTitle></CardHeader>
        <CardContent>
          {loading ? (
            <div>Chargement...</div>
          ) : users.length === 0 ? (
            <div>Aucun utilisateur</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Rôle</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map(u => (
                  <TableRow key={u.id}>
                    <TableCell>{u.nom} {u.prenom}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.role}</TableCell>
                    <TableCell className="flex gap-2">
                      <Button variant="ghost" onClick={() => { setEditUser(u); setForm({...u, password:""}); setShowEdit(true) }}>Edit</Button>
                      <Button variant="ghost" onClick={() => handleDelete(u.id)}>Suppr</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* EDIT MODAL */}
      <Dialog open={showEdit} onOpenChange={setShowEdit}>
        <DialogContent>
          <DialogHeader><DialogTitle>Modifier utilisateur</DialogTitle></DialogHeader>
          
          <form onSubmit={handleEdit} className="space-y-3">
            <div><Label>Nom</Label><Input value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })}/></div>
            <div><Label>Prénom</Label><Input value={form.prenom} onChange={e => setForm({ ...form, prenom: e.target.value })}/></div>
            <div><Label>Email</Label><Input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/></div>
            <div><Label>Mot de passe (laisser vide pour garder le même)</Label>
              <Input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}/>
            </div>
            <div>
              <Label>Rôle</Label>
              <Select value={form.role} onValueChange={v => setForm({ ...form, role: v as Role })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">ADMIN</SelectItem>
                  <SelectItem value="SECRETAIRE">SECRETAIRE</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" type="button" onClick={() => setShowEdit(false)}>Annuler</Button>
              <Button type="submit">Enregistrer</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
