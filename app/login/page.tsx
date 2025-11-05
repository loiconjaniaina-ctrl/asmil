// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { useAuth } from "@/lib/contexts/auth-context"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { Stethoscope } from "lucide-react"

// const loginSchema = z.object({
//   email: z.string().email("Veuillez entrer une adresse email valide"),
//   password: z.string().min(1, "Le mot de passe est requis"),
// })

// type LoginFormValues = z.infer<typeof loginSchema>

// export default function LoginPage() {
//   const router = useRouter()
//   const { login } = useAuth()
//   const [error, setError] = useState<string | null>(null)
//   const [loading, setLoading] = useState(false)

//   const form = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   })

//   // ✅ fonction submit propre avec hook-form
//   const onSubmit = async (values: LoginFormValues) => {
//     setError(null)
//     setLoading(true)

//     try {
//       const res = await login(values.email, values.password)
//       const role = res?.user?.role

//       if (role === "ADMIN") {
//         router.push("/admin")
//       } else if (role === "SECRETAIRE") {
//         router.push("/secretaire")
//       } else {
//         setError("Rôle inconnu")
//       }
//     } catch (err: any) {
//       setError(err.message || "Erreur lors de la connexion")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
//             <Stethoscope className="w-8 h-8 text-primary" />
//           </div>
//           <h1 className="text-3xl font-bold mb-2">ASMIL Toliara</h1>
//           <p className="text-muted-foreground">Système de gestion des membres</p>
//         </div>

//         <Card className="rounded-2xl shadow-xl p-8 border border-primary/10">
//           <CardHeader>
//             <CardTitle className="text-center">Connexion</CardTitle>
//             <CardDescription className="text-center">Identifiez-vous</CardDescription>
//           </CardHeader>

//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <Label>Email</Label>
//                       <FormControl>
//                         <Input placeholder="admin@asmil.mg" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <Label>Mot de passe</Label>
//                       <FormControl>
//                         <Input type="password" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {error && (
//                   <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
//                     {error}
//                   </div>
//                 )}

//                 <Button type="submit" className="w-full" disabled={loading}>
//                   {loading ? "Connexion..." : "Se connecter"}
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>

//         <p className="text-center text-sm text-muted-foreground mt-6">© 2025 ASMIL Toliara</p>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/contexts/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    const res = await login(email, password)
    setLoading(false)
    if (res.error) {
      setError(res.error)
      return
    }
    const role = res.user?.role
    if (role === "ADMIN") router.push("/admin")
    else if (role === "SECRETAIRE") router.push("/secretaire")
    else router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={submit} className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Connexion</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" type="password" className="input" />
        {error && <div className="text-red-600">{error}</div>}
        <button disabled={loading} type="submit" className="btn">
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  )
}

