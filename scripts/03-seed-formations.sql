-- Seed formations/courses

INSERT INTO formations (id, title, description, duration, category, price, "isActive", "createdAt", "updatedAt")
VALUES
  (gen_random_uuid()::text, 'Langues (Français, Anglais, Allemand)', 'Formation complète en langues étrangères pour améliorer vos compétences linguistiques', '6 mois', 'Langues', 150000, true, NOW(), NOW()),
  (gen_random_uuid()::text, 'Informatique Bureautique / Maintenance', 'Maîtrisez les outils bureautiques et la maintenance informatique', '4 mois', 'Informatique', 200000, true, NOW(), NOW()),
  (gen_random_uuid()::text, 'Leadership et Entrepreneuriat', 'Développez vos compétences en leadership et entrepreneuriat', '3 mois', 'Management', 180000, true, NOW(), NOW()),
  (gen_random_uuid()::text, 'Comptabilité Pratique', 'Formation pratique en comptabilité pour les entreprises', '5 mois', 'Comptabilité', 220000, true, NOW(), NOW()),
  (gen_random_uuid()::text, 'Marketing Digital', 'Apprenez les stratégies du marketing digital moderne', '4 mois', 'Marketing', 250000, true, NOW(), NOW()),
  (gen_random_uuid()::text, 'BTS Management Marketing Communication', 'Diplôme BTS en Management, Marketing et Communication', '2 ans', 'Diplôme', 500000, true, NOW(), NOW())
ON CONFLICT DO NOTHING;
