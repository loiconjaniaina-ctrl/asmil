"use client"

import { useState, useEffect } from "react"
import { AuthGuard } from "@/components/auth-guard"
import { useAuth } from "@/lib/contexts/auth-context"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, MapPin, Phone, Edit, Save, Shield } from "lucide-react"


export default function AdminProfilePage() {
  return (
    <AuthGuard allowedRoles={["admin"]}>
      <AdminProfile />
    </AuthGuard>
  )
}

function AdminProfile() {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="border-b bg-white px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">ASMIL Toliara</h1>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Mon Profil</h2>
            <p className="text-gray-600">Gérez vos informations personnelles</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Profile Card */}
            <Card className="border-none shadow-sm lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-3xl font-bold text-white shadow-lg">
                    "A"
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">name</h3>
                  <p className="text-sm text-gray-500">email</p>
                  <div className="mt-4 flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
                    <Shield className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-600">Administrateur</span>
                  </div>
                  <div className="mt-6 w-full space-y-2 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Membre depuis</span>
                      <span className="font-medium text-gray-900">
                        toLocaleDateString("fr-FR") : "-"
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Statut</span>
                      <span className="font-medium text-green-600">Actif</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Card */}
            <Card className="border-none shadow-sm lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Informations Personnelles</CardTitle>
                    <CardDescription>Vos informations de compte ASMIL Toliara</CardDescription>
                  </div>
                  
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Edit className="mr-2 h-4 w-4" />
                      Modifier
                    </Button>
                  
                    <div className="flex gap-2">
                      <Button >Annuler</Button>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Save className="mr-2 h-4 w-4" />
                        Enregistrer
                      </Button>
                    </div>
                  
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Nom */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                      <User className="h-4 w-4" /> Nom complet
                    </Label>
                    <Input
                      id="name"
                      className="border-gray-300"
                    />
                  </div>

                  {/* Email (non modifiable) */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-4 w-4" /> Adresse email "non modifiable"
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      disabled
                      className="border-gray-300 bg-gray-100"
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-4 w-4" /> Numéro de téléphone
                    </Label>
                    <Input
                      id="phone"
                      disabled
                      className="border-gray-300"
                    />
                  </div>

                  {/* Adresse */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2 text-gray-700">
                      <MapPin className="h-4 w-4" /> Adresse
                    </Label>
                    <Input
                      id="address"
                      disabled
                      className="border-gray-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
