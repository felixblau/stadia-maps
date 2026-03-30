const footerSections = [
  {
    title: "Overview",
    links: [
      { label: "Maps", href: "/products/maps", subsections: ["Interactive Basemaps", "Static Maps", "Map Styles", "Satellite Imagery", "Customize your Maps"] },
    ],
    extra: {
      title: "Geocoding & Search",
      links: ["Autocomplete Search", "Geocoding", "Time Zones"],
    },
  },
  {
    title: "Routing & Navigation",
    links: ["Turn-by-Turn Directions", "Ferrostar Navigation SDK", "Matrix Routing", "Traffic-Influenced Routing", "Isochrones", "Road Information", "Elevation"],
    extra: { title: "Data & Self-Hosted", links: ["On-Prem & Embedded Solutions"] },
    extraLink: { label: "Pricing", href: "/pricing" },
  },
  {
    title: "Official SDKs",
    links: ["MCP Server", "JavaScript & TypeScript", "Python", "Kotlin", "Swift", "PHP", "Ferrostar Navigation SDK"],
    extra: { title: "Tools", links: ["Build a Map", "Autocomplete Search for MapLibre GL JS", "Autocomplete Search for SwiftUI", "Autocomplete Search for Jetpack Compose"] },
  },
  {
    title: "Learn More",
    links: ["Documentation", "Blog", "What's New", "FAQs", "Infrastructure", "Status"],
    extra: { title: "Switching to Stadia Maps", links: ["Why Stadia Maps?", "How to Switch to Stadia Maps?", "Switch From Mapbox", "Switch From Google"] },
  },
  {
    title: "Stay in Touch",
    links: ["Discord", "Mailing List", "Mastodon", "Twitter", "LinkedIn", "GitHub"],
    bottom: ["Privacy Policy", "Terms of Service"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white px-16 py-6">
      <div className="flex items-center gap-2 font-heading font-semibold text-lg text-primary mb-6">
        <span className="text-2xl">⚡</span>
        <span>Stadia Maps</span>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h4 className="font-body font-semibold text-lg text-text px-2 py-1">{section.title}</h4>
            {section.links && (
              <ul className="flex flex-col gap-1">
                {(Array.isArray(section.links) ? section.links : []).map((link) => (
                  <li key={typeof link === "string" ? link : link.label}>
                    <a href="#" className="block pl-2 font-body text-base text-text/70 hover:text-text leading-[1.25]">
                      {typeof link === "string" ? link : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.extra && (
              <div className="mt-2">
                <h4 className="font-body font-semibold text-lg text-text px-2 py-1">{section.extra.title}</h4>
                <ul className="flex flex-col gap-1">
                  {section.extra.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="block pl-2 font-body text-base text-text/70 hover:text-text leading-[1.25]">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {section.bottom && (
              <div className="mt-auto flex flex-col gap-1">
                {section.bottom.map((link) => (
                  <a key={link} href="#" className="block pl-2 font-body text-base text-text/70 hover:text-text leading-[1.25]">{link}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-xs text-text/70 font-body">© 2025 stadiamaps.com</div>
    </footer>
  )
}
