import { useState } from "react"

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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-warm-gray transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function CreditSchedule() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="px-6 md:px-20 py-16 max-w-[1440px] mx-auto">
      <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25] text-center mb-4">
        Credit Schedule
      </h2>
      <p className="font-body text-lg text-warm-gray text-center mb-10 max-w-[700px] mx-auto">
        Every API call has a transparent credit cost. Plan your usage with confidence.
      </p>

      <div className="max-w-[900px] mx-auto">
        {creditRows.map((group, i) => (
          <div key={group.category} className="border-b border-bg-neutral">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-4 py-3.5 cursor-pointer hover:bg-bg-neutral/20 transition-colors"
            >
              <h3 className="font-heading font-semibold text-base">
                {group.category}
              </h3>
              <ChevronIcon open={openIndex === i} />
            </button>
            {openIndex === i && (
              <div className="pb-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center px-4 py-2.5 ml-4 border-b border-bg-neutral/50 last:border-0"
                  >
                    <span className="font-body text-base">{item.name}</span>
                    <span className="font-mono text-sm text-warm-gray whitespace-nowrap ml-4">
                      {item.credits}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
