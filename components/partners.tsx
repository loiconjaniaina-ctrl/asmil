import { Card, CardContent } from "@/components/ui/card"

export function Partners() {
  const partners = [
    "ONG FANAINGA (ex UGFC)",
    "SOS Village d'Enfant",
    "ACF",
    "WWF",
    "Programme MIATRIKA",
    "PSI",
    "WHH",
    "CFP Don Bosco",
    "BFM",
    "FMFP",
    "OIF",
    "IED / PNUD / ONUDI",
    "Nouvelle Génération des guides d'Isalo",
  ]

  const stagePartners = [
    "PIC",
    "ADES",
    "COPEFRITO",
    "BLUE VENTURES",
    "JIRAMA",
    "ORANGE",
    "AIRTEL",
    "TELMA",
    "RADIO UNIVERSITE",
    "RADIO TELE SOA TALILY",
    "CRS",
    "WWF",
    "CARSO",
    "SOS VILAGE D'ENFANTS",
    "WHH",
    "GREENTSIKA",
    "SEMS",
    "COMATO",
  ]

  return (
    <section id="partenaires" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-6xl font-bold text-muted-foreground/20">04</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Nos Partenaires</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Nous collaborons avec des organisations nationales et internationales de référence
          </p>
        </div>

        <div className="grid gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Partenaires de Formation</h3>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <p className="text-sm font-medium text-center">{partner}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Partenaires de Stage</h3>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {stagePartners.map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <p className="text-sm font-medium text-center">{partner}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
