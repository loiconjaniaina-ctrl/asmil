"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    formation: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Toliara Centre, Région Atsimo Andrefana, District Toliara I, Commune Urbaine Toliara",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "034 09 991 55 / 033 24 352 18",
    },
    {
      icon: Mail,
      title: "Email",
      content: "asmiltoliary@gmail.com",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lundi - Vendredi: 8h - 18h",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-6xl font-bold text-muted-foreground/20">04</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Contactez-nous</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Rejoignez l'Institut ASMIL</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet de formation.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block mb-1">{info.title}</strong>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="formation" className="block text-sm font-medium mb-2">
                    Formation souhaitée
                  </label>
                  <Select
                    value={formData.formation}
                    onValueChange={(value) => setFormData({ ...formData, formation: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une formation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="langues">Langues (Français, Anglais, Allemand)</SelectItem>
                      <SelectItem value="informatique">Informatique Bureautique / Maintenance</SelectItem>
                      <SelectItem value="leadership">Leadership et Entrepreneuriat</SelectItem>
                      <SelectItem value="comptabilite">Comptabilité Pratique</SelectItem>
                      <SelectItem value="marketing">Marketing Digital</SelectItem>
                      <SelectItem value="bts">BTS Management Marketing Communication</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Votre message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
