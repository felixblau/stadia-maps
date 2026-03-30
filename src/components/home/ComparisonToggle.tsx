import { useState } from "react"

export default function ComparisonToggle() {
  const [activeTab, setActiveTab] = useState<"old" | "stadia">("old")

  const oldWayPoints = [
    {
      title: "Complex Pricing",
      description: "Opaque tiers, hidden fees, and billing surprises that punish growth.",
    },
    {
      title: "Vendor Lock-In",
      description: "Proprietary formats and APIs that make switching providers a nightmare.",
    },
    {
      title: "Privacy Concerns",
      description: "Your user data becomes their product. Fine print that makes compliance a headache.",
    },
  ]

  const stadiaWayPoints = [
    {
      title: "Simple Credits",
      description: "One currency for all APIs. Transparent pricing that makes forecasting easy.",
    },
    {
      title: "Open Standards",
      description: "Built on OSM data and open protocols. Migrate in or out without rewriting your app.",
    },
    {
      title: "Privacy by Default",
      description: "No tracking, no reselling. GDPR-friendly infrastructure that respects your users.",
    },
  ]

  const content = activeTab === "old" ? oldWayPoints : stadiaWayPoints

  return (
    <section className="w-full px-16 py-16">
      <div className="mx-auto max-w-[1280px] space-y-12">
        <h2 className="font-heading font-semibold text-[40px] leading-[1.25] text-text text-center">
          Fast, reliable, privacy-first location infrastructure for developers
        </h2>

        {/* Toggle buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("old")}
            className={`px-6 py-3 font-body font-semibold text-lg rounded-lg transition-all ${
              activeTab === "old"
                ? "bg-white shadow-lg text-text"
                : "bg-transparent text-warm-gray hover:text-text"
            }`}
          >
            The Old Way
          </button>
          <button
            onClick={() => setActiveTab("stadia")}
            className={`px-6 py-3 font-body font-semibold text-lg rounded-lg transition-all ${
              activeTab === "stadia"
                ? "bg-white shadow-lg text-text"
                : "bg-transparent text-warm-gray hover:text-text"
            }`}
          >
            The Stadia Maps Way
          </button>
        </div>

        {/* Content area */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.map((point, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-body font-semibold text-lg text-text">{point.title}</h3>
                <p className="font-body text-base text-text/70 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
