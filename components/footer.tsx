export function Footer() {
  const footerSections = [
    {
      title: "Formations",
      links: [
        { label: "Gestion d'Entreprise", href: "#formations" },
        { label: "Informatique", href: "#formations" },
        { label: "Commerce", href: "#formations" },
      ],
    },
    {
      title: "Liens Rapides",
      links: [
        { label: "Accueil", href: "#accueil" },
        { label: "À propos", href: "#apropos" },
        { label: "Formations", href: "#formations" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Suivez-nous",
      links: [
        { label: "Facebook", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Twitter", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Institut ASMIL Toliara</h4>
            <p className="text-muted-foreground leading-relaxed">
              Un centre d'excellence dédié à la formation professionnelle et au développement des compétences à
              Madagascar.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Institut ASMIL Toliara. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
