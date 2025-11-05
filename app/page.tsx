import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Missions } from "@/components/missions"
import { Formations } from "@/components/formations"
import { Partners } from "@/components/partners"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Missions />
      <Formations />
      <Partners />
      <Contact />
      <Footer />
    </main>
  )
}
