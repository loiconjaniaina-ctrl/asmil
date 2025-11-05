import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900" />
      <div className="absolute inset-0 bg-[url('/modern-university-campus.png')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Institut Supérieur de Formation Professionnelle
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-red-100 animate-fade-in-up">
            Centre de formation et d'incubation d'entreprises à Toliara, Madagascar. Nous formons les leaders et
            entrepreneurs de demain depuis 2004.
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Button asChild size="lg" className="bg-white text-red-900 hover:bg-red-50">
            <a href="#formations">Découvrir nos formations</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            <a href="#contact">Nous contacter</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Défiler</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  )
}
