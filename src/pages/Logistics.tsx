import Button from "@/components/ui/Button"

export default function Logistics() {
  const valueProps = [
    {
      icon: "🗺️",
      title: "Routing & Navigation",
      description:
        "Multi-modal routing optimized for logistics operations. Real-time traffic integration, route optimization, and turn-by-turn directions for your fleet.",
    },
    {
      icon: "🔍",
      title: "Place search",
      description:
        "Accurate geocoding and address search for delivery locations. Autocomplete, batch processing, and global coverage to streamline your operations.",
    },
    {
      icon: "🔒",
      title: "Privacy by Default",
      description:
        "Your logistics data stays private. No tracking, no data selling. GDPR compliant infrastructure designed for enterprise security requirements.",
    },
  ]

  const caseStudies = [
    {
      company: "routeblue",
      tagline: "Map and then route",
      description:
        "routeblue leverages Stadia Maps to visualize delivery zones and optimize routing for last-mile logistics. Real-time traffic data helps drivers avoid delays and meet delivery windows consistently.",
      image: "routeblue-placeholder",
    },
    {
      company: "Shipsy",
      tagline: "Unify your logistic experience",
      description:
        "Shipsy integrated Stadia Maps to create a unified logistics platform that handles everything from fleet tracking to customer notifications. Accurate geocoding ensures packages reach the right destination every time.",
      image: "shipsy-placeholder",
    },
    {
      company: "Nextmy",
      tagline: "Build modeling to deliver on time",
      description:
        "Nextmy uses Stadia Maps routing APIs to build predictive delivery models. Isochrone analysis and matrix routing enable intelligent dispatch decisions that improve on-time delivery rates by 23%.",
      image: "nextmy-placeholder",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-16 py-16 md:py-24 bg-gradient-to-br from-primary/90 via-accent/80 to-accent-bright/90">
        <div className="absolute inset-0 bg-text/20"></div>
        <div className="relative max-w-[1280px] mx-auto space-y-6 text-center">
          <h1 className="font-heading font-semibold text-3xl md:text-[50px] leading-[1.25] text-white">
            Logistics
          </h1>
          <p className="font-body text-base md:text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            Manage fleets, track assets, dispatch vehicles, optimize routes, improve ETAs, and visualize data with the help of Stadia Maps.
          </p>
          <div className="pt-4">
            <Button variant="primary">Get started</Button>
          </div>
        </div>
      </section>

      {/* Customer Logo Bar */}
      <section className="w-full px-6 md:px-16 py-12 bg-bg-neutral">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {["routeblue", "Shipsy", "Nextmy"].map((company) => (
              <div
                key={company}
                className="flex items-center justify-center bg-white rounded-lg px-6 md:px-8 py-4 min-w-[140px] md:min-w-[160px] border border-border-ui"
              >
                <span className="font-body font-semibold text-base md:text-lg text-warm-gray">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="w-full px-6 md:px-16 py-16">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <h2 className="font-heading font-semibold text-2xl md:text-[40px] leading-[1.25] text-text text-center">
            The Location Platform You Deserve. Clean, Fast, and Fair.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="text-5xl">{prop.icon}</div>
                <h3 className="font-body font-semibold text-lg text-text">{prop.title}</h3>
                <p className="font-body text-base text-text/70 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full px-6 md:px-16 py-16 bg-bg-neutral">
        <div className="max-w-[1280px] mx-auto space-y-16">
          <h2 className="font-heading font-semibold text-2xl md:text-[40px] leading-[1.25] text-text text-center">
            Customer Success Stories
          </h2>

          <div className="space-y-16 md:space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image placeholder */}
                <div className="w-full md:flex-1">
                  <div className="aspect-video w-full bg-gradient-to-br from-accent/20 via-accent-bright/30 to-primary/20 rounded-2xl flex items-center justify-center">
                    <div className="font-heading text-text/20 text-xl md:text-2xl">{study.image}</div>
                  </div>
                </div>

                {/* Text content */}
                <div className="w-full md:flex-1 space-y-4">
                  <h3 className="font-heading font-semibold text-2xl md:text-[34px] leading-[1.25] text-text">
                    {study.company}
                  </h3>
                  <p className="font-body font-semibold text-lg md:text-xl text-accent">
                    {study.tagline}
                  </p>
                  <p className="font-body text-base text-text/70 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
