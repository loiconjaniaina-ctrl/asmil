// Script to generate hashed password for admin user
const bcrypt = require("bcryptjs")

async function createHashedPassword() {
  const password = "admin123"
  const hashedPassword = await bcrypt.hash(password, 10)

  console.log("=".repeat(60))
  console.log("ADMIN USER CREATION")
  console.log("=".repeat(60))
  console.log("\nPassword:", password)
  console.log("Hashed:", hashedPassword)
  console.log("\n" + "=".repeat(60))
  console.log("SQL COMMAND TO CREATE ADMIN USER")
  console.log("=".repeat(60))
  console.log(`
INSERT INTO personnel (nom, prenom, email, password, role, "createdAt", "updatedAt")
VALUES (
  'Administrateur',
  'ASMIL',
  'admin@asmil.mg',
  '${hashedPassword}',
  'admin',
  NOW(),
  NOW()
);
  `)
  console.log("=".repeat(60))
  console.log("\nCopy the SQL command above and run it in pgAdmin or psql")
  console.log("=".repeat(60))
}

createHashedPassword().catch(console.error)
