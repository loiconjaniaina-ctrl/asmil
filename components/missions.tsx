import { GraduationCap, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Missions() {
  const achievements1 = [
    "Renforcement de capacité en Français et Anglais en expression orale et écrite",
    "Renforcement de capacité en Informatique Bureautique et/ou Maintenance en Informatique",
    "Amélioration de l'employabilité : Développement personnel, Leadership, Team Building",
    "Accroître l'employabilité par le développement personnel, le renforcement des compétences en travail d'équipe",
    "Formation avancées en Entrepreneuriat sanctionnées d'un Brevet de Technicien Supérieur(BTS)",
  ]

  const achievements2 = [
    "Accompagner les entrepreneurs : les aider à amener leur projet au prochain niveau (de l'idéation à l'entrepreneur établi)",
    "Soutenir la création d'entreprises en fournissant les outils nécessaires à leur développement, l'accès au financement et le mentorat",
    "Fournir des services aux entreprises dans des domaines innovants tels l'économie bleue, verte, le tourisme, la numérisation et la formation",
    "Offrir des formation conduisant à l'obtention de certificats conformes aux normes du Ministère de l'Emploi, l'Education Technique et la Formation Professionnelle",
  ]

  const stats = [
    { number: "85", label: "Startups soutenues" },
    { number: "140", label: "PME accompagnées" },
    { number: "525", label: "Jeunes formés au leadership" },
    { number: "20", label: "Diplômés BTS tous les 2 ans" },
  ]

  return (
    <section id="missions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-6xl font-bold text-muted-foreground/20">02</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Nos Missions</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mission 1: Institut de Formation */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Mission N°1</h3>
                  <p className="text-primary font-semibold">Institut de Formation</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Formations certifiées selon les normes du Ministère de l'Emploi, de l'Enseignement Technique et de la
                Formation Professionnelle :
              </p>
              <ul className="space-y-3">
                {achievements1.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-semibold text-primary mb-2">RÉALISATION MAJEURE :</p>
                <p className="text-muted-foreground">
                  De 5 étudiants en 2004 à 300-500 étudiants formés annuellement depuis 2010
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission 2: Centre d'Incubation */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Mission N°2</h3>
                  <p className="text-primary font-semibold">Centre d'Incubation et d'Accélération</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">Depuis 2014, nous nous engageons à :</p>
              <ul className="space-y-3">
                {achievements2.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-semibold text-primary mb-2">RÉALISATIONS MAJEURES :</p>
                <p className="text-muted-foreground">
                  Pré-incubation, incubation et accompagnement entrepreneurial avec des résultats concrets
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Nos Réalisations en Chiffres</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-lg">
              <span className="font-semibold">14</span> projets d'incubation en cours •
              <span className="font-semibold"> 11</span> lauréats en concours de projets
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
