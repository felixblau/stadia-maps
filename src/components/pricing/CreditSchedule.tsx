const creditRows = [
  { category: "Basemaps", items: [
    { name: "Standard Vector Basemaps", credits: "1 per tile" },
    { name: "Standard Raster Basemaps", credits: "1 per tile" },
    { name: "Satellite Imagery", credits: "4 per tile" },
  ]},
  { category: "Static Maps", items: [
    { name: "Static Maps", credits: "20 per request" },
    { name: "Cacheable Static Maps", credits: "2,000 per request" },
  ]},
  { category: "Search & Geocoding", items: [
    { name: "Autocomplete Search v2", credits: "1 per request" },
    { name: "Autocomplete Search v1", credits: "20 per request" },
    { name: "Geocoding (Forward/Reverse/Structured/Bulk)", credits: "20 per request" },
  ]},
  { category: "Routing & Navigation", items: [
    { name: "Routing (Standard/Nearest Roads/Map Matching/Trace)", credits: "20 per request" },
    { name: "Optimized Routing", credits: "40 per request" },
    { name: "Time/Distance Matrix", credits: "10 per element" },
    { name: "Isochrones", credits: "20 per request" },
  ]},
  { category: "Other APIs", items: [
    { name: "Time Zones", credits: "5 per request" },
    { name: "Elevation", credits: "5 per request" },
  ]},
]

export default function CreditSchedule() {
  return (
    <section className="px-6 md:px-20 py-16 max-w-[1440px] mx-auto">
      <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25] text-center mb-4">
        Credit Schedule
      </h2>
      <p className="font-body text-lg text-warm-gray text-center mb-10 max-w-[700px] mx-auto">
        Every API call has a transparent credit cost. Plan your usage with confidence.
      </p>

      <div className="max-w-[900px] mx-auto">
        {creditRows.map((group) => (
          <div key={group.category}>
            <div className="bg-bg-neutral/40 px-4 py-2">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider">
                {group.category}
              </h3>
            </div>
            {group.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center px-4 py-3 border-b border-bg-neutral"
              >
                <span className="font-body text-base">{item.name}</span>
                <span className="font-mono text-sm text-warm-gray whitespace-nowrap ml-4">
                  {item.credits}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
