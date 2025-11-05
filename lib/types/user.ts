// lib/types/user.ts

export type UserRole = "ADMIN" | "SECRETAIRE"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}
