"use client"

import { FormationsCarousel } from "@/components/formations-carousel"

export function Formations() {
  const formations = [
    {
      title: "Langues (Français & Anglais)",
      description: "Renforcement de capacité en expression orale et écrite",
      features: ["Expression orale", "Expression écrite", "Certification METFP"],
      image: "/language-learning-classroom.jpg",
    },
    {
      title: "Informatique Bureautique",
      description: "Maîtrise des outils bureautiques et maintenance informatique",
      features: ["Word, Excel, PowerPoint", "Maintenance informatique", "Projets pratiques"],
      image: "/computer-training-classroom.jpg",
    },
    {
      title: "Développement Personnel & Leadership",
      description: "Amélioration de l'employabilité et compétences en leadership",
      features: ["Leadership", "Team Building", "Développement personnel"],
      image: "/leadership-workshop.png",
    },
    {
      title: "Comptabilité Pratique",
      description: "Formation en comptabilité pour la gestion d'entreprise",
      features: ["Comptabilité générale", "Gestion financière", "Logiciels comptables"],
      image: "/accounting-finance-office.jpg",
    },
    {
      title: "Marketing Digital",
      description: "Stratégies digitales et communication en ligne",
      features: ["Réseaux sociaux", "Community Management", "Stratégies digitales"],
      image: "/digital-marketing-social-media.png",
    },
    {
      title: "Culture Entrepreneuriale",
      description: "Formation pour développer l'esprit entrepreneurial",
      features: ["Création d'entreprise", "Gestion de projet", "Innovation"],
      image: "/startup-meeting.png",
    },
    {
      title: "BTS Management Marketing Communication",
      description: "Formation supérieure sanctionnée par un diplôme reconnu",
      features: ["Durée: 2 ans", "Diplôme BTS", "20 diplômés tous les 2 ans"],
      image: "/business-management-presentation.jpg",
    },
  ]

  return (
    <section id="formations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-6xl font-bold text-muted-foreground/20">03</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Nos Formations</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Formations certifiées selon les normes du Ministère de l'Emploi, de l'Enseignement Technique et de la
            Formation Professionnelle
          </p>
        </div>

        <FormationsCarousel formations={formations} />
      </div>
    </section>
  )
}
