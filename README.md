# Institut ASMIL Toliara - Site Web Officiel

Site web complet pour l'Institut Supérieur de Formation Professionnelle ASMIL à Toliara, Madagascar.

## Fonctionnalités

### Frontend
- Page d'accueil avec présentation de l'institut
- Section À propos avec les valeurs ASMIL
- Missions de formation et d'incubation
- Catalogue de formations
- Liste des partenaires
- Formulaire de contact fonctionnel
- Design moderne et responsive

### Backend
- API REST complète avec Next.js App Router
- Authentification JWT sécurisée
- Gestion des utilisateurs (CRUD)
- Système de rôles (Admin / Secrétaire)
- Gestion des demandes de contact
- Base de données PostgreSQL avec Prisma

### Dashboard Admin
- Connexion sécurisée
- Statistiques en temps réel
- Gestion des demandes de contact
- Gestion des utilisateurs (Admin uniquement)
- Interface moderne et intuitive

## Technologies

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS v4
- **Backend**: Next.js API Routes, Prisma ORM
- **Base de données**: PostgreSQL
- **Authentification**: JWT avec jose, bcryptjs
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React

## Installation

### Prérequis
- Node.js 18+ et npm
- PostgreSQL installé et en cours d'exécution

### Étapes

1. **Cloner le repository**
\`\`\`bash
git clone https://github.com/onjaniainarazafimanantsoa73-stack/soutenance.git
cd soutenance
\`\`\`

2. **Installer les dépendances**
\`\`\`bash
npm install
\`\`\`

3. **Configurer la base de données**

Créez une base de données PostgreSQL :
\`\`\`bash
psql -U postgres
CREATE DATABASE asmil_db;
\q
\`\`\`

4. **Configurer les variables d'environnement**

Créez un fichier \`.env\` à la racine :
\`\`\`env
DATABASE_URL="postgresql://postgres:password@localhost:5432/asmil_db?schema=public"
JWT_SECRET="votre-cle-secrete-jwt-tres-longue-et-aleatoire"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
\`\`\`

5. **Initialiser la base de données**
\`\`\`bash
# Générer le client Prisma
npx prisma generate

# Créer les tables
npx prisma db push

# Ouvrir Prisma Studio pour visualiser (optionnel)
npx prisma studio
\`\`\`

6. **Lancer le serveur de développement**
\`\`\`bash
npm run dev
\`\`\`

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Utilisation

### Accès Admin

Pour accéder au dashboard admin, allez sur [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

**Utilisateurs par défaut** (après avoir exécuté les scripts de seed) :

**Admin:**
- Email: admin@asmil.mg
- Mot de passe: admin123

**Secrétaire:**
- Email: secretaire@asmil.mg
- Mot de passe: secretaire123

⚠️ **Important:** Changez ces mots de passe en production !

### Formulaire de Contact

Les visiteurs peuvent soumettre des demandes via le formulaire de contact. Les soumissions sont stockées dans la base de données et visibles dans le dashboard admin.

## Structure du Projet

\`\`\`
├── app/
│   ├── admin/              # Pages admin
│   ├── api/                # API Routes
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── admin/              # Composants admin
│   ├── ui/                 # Composants UI (shadcn)
│   └── *.tsx               # Composants de page
├── lib/
│   ├── auth/               # Utilitaires d'authentification
│   ├── contexts/           # Contextes React
│   ├── db/                 # Configuration base de données
│   └── services/           # Services API
├── prisma/
│   └── schema.prisma       # Schéma de base de données
├── scripts/                # Scripts SQL
└── public/                 # Assets statiques
\`\`\`

## Scripts Disponibles

- \`npm run dev\` - Lancer le serveur de développement
- \`npm run build\` - Construire pour la production
- \`npm start\` - Lancer le serveur de production
- \`npm run lint\` - Vérifier le code
- \`npx prisma studio\` - Ouvrir l'interface de gestion de données
- \`npx prisma generate\` - Générer le client Prisma
- \`npx prisma db push\` - Synchroniser le schéma avec la base de données

## Déploiement

### Vercel (Recommandé)

1. Pushez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Ajoutez les variables d'environnement
4. Déployez

### Autres Plateformes

Assurez-vous d'avoir :
- Une base de données PostgreSQL accessible
- Les variables d'environnement configurées
- Node.js 18+ installé

## Support

Pour toute question ou problème, contactez :
- Email: asmiltoliary@gmail.com
- Téléphone: 034 09 991 55 / 033 24 352 18

## Licence

© 2025 Institut ASMIL Toliara. Tous droits réservés.
\`\`\`
