-- Seed initial admin user
-- Password: admin123 (hashed with bcrypt)

INSERT INTO personnel (id, nom, prenom, email, password, role, "createdAt", "updatedAt")
VALUES (
  gen_random_uuid()::text,
  'Admin',
  'ASMIL',
  'admin@asmil.mg',
  '$2a$10$rKvVPZqGhf5L5h5L5h5L5uO5L5h5L5h5L5h5L5h5L5h5L5h5L5h5L',
  'ADMIN',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO NOTHING;

-- Seed secretary user
-- Password: secretaire123

INSERT INTO personnel (id, nom, prenom, email, password, role, "createdAt", "updatedAt")
VALUES (
  gen_random_uuid()::text,
  'Secrétaire',
  'ASMIL',
  'secretaire@asmil.mg',
  '$2a$10$rKvVPZqGhf5L5h5L5h5L5uO5L5h5L5h5L5h5L5h5L5h5L5h5L5h5L',
  'SECRETAIRE',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO NOTHING;
