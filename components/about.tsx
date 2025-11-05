import { Target, Users, Rocket, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const values = [
    {
      icon: Users,
      title: "ASSIMILATION",
      description:
        "Fournir aux MTPE, jeunes et chercheurs d'emploi des compétences pratiques pour la gestion durable des entreprises et améliorer leur employabilité.",
    },
    {
      icon: Target,
      title: "MANAGE",
      description:
        "Renforcer les capacités des MTPE et des jeunes pour structurer leurs projets et s'adapter aux défis du marché du travail.",
    },
    {
      icon: Rocket,
      title: "INNOVATE",
      description:
        "Promouvoir l'innovation dans les MTPE et chez les jeunes, avec un focus sur les secteurs durables et numériques pour améliorer leur compétitivité.",
    },
    {
      icon: Award,
      title: "LEAD",
      description:
        "Former des leaders parmi les MTPE et les jeunes, capables de prendre des décisions stratégiques et de créer des emplois décents.",
    },
  ]

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-6xl font-bold text-muted-foreground/20">01</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">À Propos d'ASMIL</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-primary">ASSIMILATION to MANAGE, INNOVATE and LEAD</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fondé en 2014, l'ASMIL est un Institut Supérieur de Formation Professionnelle agréé par l'État Malagasy.
              Depuis son ouverture initiale en 2004 avec seulement 5 étudiants, nous formons annuellement en moyenne
              entre 300 et 500 étudiants, professionnels et chercheurs d'emploi depuis 2010.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Situé à Toliara Centre, région Atsimo Andrefana, l'ASMIL combine deux missions essentielles : la formation
              professionnelle et l'incubation d'entreprises, contribuant ainsi au développement économique et social de
              Madagascar.
            </p>
          </div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6">Notre Vision 2030</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            D'ici 2030, l'ASMIL aspire à être un acteur clé dans la formation et l'accompagnement des Micro et Très
            Petites Entreprises (MTPE) et des jeunes entrepreneurs à Madagascar. Nous nous engageons à renforcer les
            capacités des MTPE et des jeunes en leur offrant des compétences pratiques en gestion, innovation et
            développement durable. Par notre soutien, nous favoriserons la création d'emplois décents et
            l'autonomisation des jeunes, tout en contribuant à un environnement entrepreneurial responsable et durable.
          </p>
        </div>
      </div>
    </section>
  )
}
