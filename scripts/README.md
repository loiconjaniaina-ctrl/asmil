# Scripts de Base de Données

## Ordre d'exécution

1. **01-init-database.sql** - Déjà exécuté par Prisma (`npx prisma db push`)
2. **02-seed-admin.sql** - Crée les utilisateurs admin et secrétaire
3. **03-seed-formations.sql** - Crée les formations disponibles

## Comment exécuter les scripts

### Option 1 : Via pgAdmin

1. Ouvrez pgAdmin
2. Connectez-vous à votre serveur PostgreSQL
3. Sélectionnez la base de données `asmil_db`
4. Cliquez sur "Query Tool"
5. Copiez-collez le contenu du script
6. Cliquez sur "Execute" (F5)

### Option 2 : Via psql (ligne de commande)

\`\`\`bash
psql -U postgres -d asmil_db -f scripts/02-seed-admin.sql
psql -U postgres -d asmil_db -f scripts/03-seed-formations.sql
\`\`\`

### Option 3 : Générer un nouveau mot de passe hashé

\`\`\`bash
node scripts/create-admin.js
\`\`\`

Puis copiez la commande SQL générée et exécutez-la dans PostgreSQL.

## Identifiants par défaut

Après avoir exécuté `02-seed-admin.sql` :

**Administrateur :**
- Email: `admin@asmil.mg`
- Mot de passe: `admin123`

**Secrétaire :**
- Email: `secretaire@asmil.mg`
- Mot de passe: `admin123`

## Note importante

Le mot de passe hashé dans `02-seed-admin.sql` est un exemple. Pour plus de sécurité en production, utilisez `create-admin.js` pour générer un nouveau hash avec un mot de passe fort.
