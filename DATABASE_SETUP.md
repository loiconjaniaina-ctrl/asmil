# Configuration de la Base de Données PostgreSQL

## Prérequis
- PostgreSQL installé sur votre machine
- Node.js et npm installés

## Étapes d'installation

### 1. Créer la base de données PostgreSQL

\`\`\`bash
# Se connecter à PostgreSQL
psql -U postgres

# Créer la base de données
CREATE DATABASE asmil_db;

# Créer un utilisateur (optionnel)
CREATE USER asmil_user WITH PASSWORD 'votre_mot_de_passe';
GRANT ALL PRIVILEGES ON DATABASE asmil_db TO asmil_user;

# Quitter psql
\q
\`\`\`

### 2. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

\`\`\`env
DATABASE_URL="postgresql://asmil_user:votre_mot_de_passe@localhost:5432/asmil_db?schema=public"
JWT_SECRET="votre-cle-secrete-jwt-tres-longue-et-aleatoire"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
\`\`\`

### 3. Installer les dépendances

\`\`\`bash
npm install
\`\`\`

### 4. Générer le client Prisma et créer les tables

\`\`\`bash
# Générer le client Prisma
npx prisma generate

# Créer les tables dans la base de données
npx prisma db push

# Ou utiliser les migrations (recommandé pour la production)
npx prisma migrate dev --name init
\`\`\`

### 5. Insérer les données initiales

Les scripts SQL dans le dossier `scripts/` peuvent être exécutés pour insérer les données initiales.

### 6. Visualiser la base de données (optionnel)

\`\`\`bash
npx prisma studio
\`\`\`

Cela ouvrira une interface web pour visualiser et modifier vos données.

## Commandes utiles

- `npx prisma generate` - Génère le client Prisma
- `npx prisma db push` - Synchronise le schéma avec la base de données
- `npx prisma migrate dev` - Crée une nouvelle migration
- `npx prisma studio` - Ouvre l'interface de gestion de données
- `npx prisma db seed` - Exécute le script de seed

## Utilisateurs par défaut

Après l'exécution des scripts de seed :

**Admin:**
- Email: admin@asmil.mg
- Mot de passe: admin123

**Secrétaire:**
- Email: secretaire@asmil.mg
- Mot de passe: secretaire123

⚠️ **Important:** Changez ces mots de passe en production !
