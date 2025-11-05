interface LoginResponse {
  user: {
    id: string
    nom: string
    prenom: string
    email: string
    role: string
  }
  token: string
}

interface User {
  id: string
  nom: string
  prenom: string
  email: string
  role: string
}

export class AuthService {
  private static readonly API_BASE = "/api"

  static async login(email: string, password: string): Promise<LoginResponse> {
    const response = await fetch(`${this.API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Erreur de connexion")
    }

    const data = await response.json()

    // Store token in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
    }

    return data
  }

  static async getCurrentUser(): Promise<User | null> {
    if (typeof window === "undefined") return null

    const token = localStorage.getItem("token")
    const userStr = localStorage.getItem("user")

    if (!token || !userStr) return null

    try {
      return JSON.parse(userStr)
    } catch {
      return null
    }
  }

  static logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }
  }

  static async getUsers(): Promise<User[]> {
    const token = localStorage.getItem("token")

    const response = await fetch(`${this.API_BASE}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des utilisateurs")
    }

    return response.json()
  }

  static async getUser(userId: string): Promise<User> {
    const token = localStorage.getItem("token")

    const response = await fetch(`${this.API_BASE}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de l'utilisateur")
    }

    return response.json()
  }
}
