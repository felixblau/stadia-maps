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

export default function CreditSchedule() {
  const [activeTab, setActiveTab] = useState(0)
  const activeGroup = creditRows[activeTab]

  return (
    <section className="px-6 md:px-20 py-16 max-w-[1440px] mx-auto">
      <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25] text-center mb-4">
        Credit Schedule
      </h2>
      <p className="font-body text-lg text-warm-gray text-center mb-10 max-w-[700px] mx-auto">
        Every API call has a transparent credit cost. Plan your usage with confidence.
      </p>

      <div className="max-w-[900px] mx-auto">
        {/* Tabs */}
        <div className="flex gap-1 border-b border-bg-neutral mb-0 overflow-x-auto">
          {creditRows.map((group, i) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2.5 font-heading font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer rounded-t-lg ${
                i === activeTab
                  ? "bg-white text-primary border border-bg-neutral border-b-white -mb-px"
                  : "text-warm-gray hover:text-text"
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Table for active tab */}
        <div className="bg-white rounded-b-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left font-heading font-semibold text-base py-3 px-4">
                  Request Type
                </th>
                <th className="text-right font-heading font-semibold text-base py-3 px-4 w-[200px]">
                  Credit Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {activeGroup.items.map((item) => (
                <tr key={item.name} className="border-b border-bg-neutral">
                  <td className="font-body text-base py-2.5 px-4">{item.name}</td>
                  <td className="font-mono text-sm text-warm-gray py-2.5 px-4 text-right">
                    {item.credits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
