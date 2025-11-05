import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const adminPassword = await bcrypt.hash("admin123", 10)
  const secretairePassword = await bcrypt.hash("secret123", 10)

  await prisma.personnel.createMany({
    data: [
      {
        nom: "Admin",
        prenom: "Root",
        email: "admin@asmil.com",
        password: adminPassword,
        role: "ADMIN",
      },
      {
        nom: "Secrétaire",
        prenom: "Office",
        email: "secret@asmil.com",
        password: secretairePassword,
        role: "SECRETAIRE",
      },
    ],
  })
}

main()
  .then(() => console.log("✅ Seed terminé"))
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
