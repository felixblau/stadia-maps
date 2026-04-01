import { useState } from "react"

type CellValue = true | false | string

interface FeatureItem {
  name: string
  credits?: string
  free: CellValue
  starter: CellValue
  standard: CellValue
  pro: CellValue
}

const features: { category: string; items: FeatureItem[] }[] = [
  {
    category: "Maps",
    items: [
      { name: "Vector Basemaps", credits: "1 / tile", free: true, starter: true, standard: true, pro: true },
      { name: "Raster Basemaps", credits: "1 / tile", free: true, starter: true, standard: true, pro: true },
      { name: "Satellite Imagery", credits: "4 / tile", free: false, starter: false, standard: true, pro: true },
      { name: "Additional Data Tilesets", free: true, starter: true, standard: true, pro: true },
      { name: "Static Maps", credits: "20 / req", free: false, starter: true, standard: true, pro: true },
      { name: "Cacheable Static Maps", credits: "2,000 / req", free: false, starter: true, standard: true, pro: true },
    ],
  },
  {
    category: "Search & Geocoding",
    items: [
      { name: "Autocomplete Search v2", credits: "1 / req", free: true, starter: true, standard: true, pro: true },
      { name: "Autocomplete Search v1", credits: "20 / req", free: true, starter: true, standard: true, pro: true },
      { name: "Forward Geocoding", credits: "20 / req", free: "Temp storage", starter: "Temp storage", standard: "Persistent storage", pro: "Persistent storage" },
      { name: "Structured Geocoding", credits: "20 / req", free: false, starter: "Temp storage", standard: "Persistent storage", pro: "Persistent storage" },
      { name: "Reverse Geocoding", credits: "20 / req", free: false, starter: "Temp storage", standard: "Persistent storage", pro: "Persistent storage" },
      { name: "Bulk Geocoding", credits: "20 / req", free: false, starter: false, standard: true, pro: true },
      { name: "Place Lookup", credits: "20 / req", free: "Temp storage", starter: "Temp storage", standard: "Persistent storage", pro: "Persistent storage" },
    ],
  },
  {
    category: "Routing & Navigation",
    items: [
      { name: "Standard Routing", credits: "20 / req", free: true, starter: true, standard: true, pro: true },
      { name: "Nearest Roads", credits: "20 / req", free: false, starter: false, standard: true, pro: true },
      { name: "Map Matching", credits: "20 / req", free: false, starter: false, standard: true, pro: true },
      { name: "Trace Attributes", credits: "20 / req", free: false, starter: false, standard: true, pro: true },
      { name: "Isochrones", credits: "20 / req", free: false, starter: false, standard: true, pro: true },
      { name: "Optimized Routing", credits: "40 / req", free: false, starter: false, standard: true, pro: true },
      { name: "Time/Distance Matrix", credits: "10 / element", free: false, starter: false, standard: "625 elements", pro: "10,000 elements" },
    ],
  },
  {
    category: "Data APIs",
    items: [
      { name: "Time Zones", credits: "5 / req", free: true, starter: true, standard: true, pro: true },
      { name: "Elevation", credits: "5 / req", free: false, starter: true, standard: true, pro: true },
    ],
  },
  {
    category: "Platform",
    items: [
      { name: "Commercial Use", free: false, starter: true, standard: true, pro: true },
      { name: "Priority Support", free: false, starter: false, standard: false, pro: true },
    ],
  },
]

function Check() {
  return (
    <svg className="w-5 h-5 text-accent mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Cross() {
  return (
    <svg className="w-5 h-5 text-border-ui mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <Check />
  if (value === false) return <Cross />
  return (
    <span className="font-body text-xs leading-tight text-center block text-warm-gray">
      {value}
    </span>
  )
}

export default function FeatureComparison() {
  const [activeTab, setActiveTab] = useState(0)
  const activeGroup = features[activeTab]

  return (
    <section className="px-6 md:px-20 py-16 bg-bg-neutral/20">
      <div className="max-w-[1060px] mx-auto">
        <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25] text-center mb-4">
          Complete features and credit schedule
        </h2>
        <p className="font-body text-lg text-warm-gray text-center mb-10 max-w-[700px] mx-auto">
          Every API call has a transparent credit cost. Plan your usage with confidence.
        </p>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-bg-neutral mb-0 overflow-x-auto">
          {features.map((group, i) => (
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

        {/* Unified table */}
        <div className="bg-white rounded-b-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left font-heading font-semibold text-base py-3 px-4">
                  Feature
                </th>
                <th className="text-right font-heading font-semibold text-base py-3 px-4 w-[110px]">
                  Credit Cost
                </th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[90px]">
                  Free
                </th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[90px]">
                  Essentials
                </th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[90px]">
                  Standard
                </th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[90px]">
                  Professional
                </th>
              </tr>
            </thead>
            <tbody>
              {activeGroup.items.map((item) => (
                <tr key={item.name} className="border-b border-bg-neutral">
                  <td className="font-body text-base py-2.5 px-4">{item.name}</td>
                  <td className="font-mono text-sm text-warm-gray py-2.5 px-4 text-right whitespace-nowrap">
                    {item.credits ?? "—"}
                  </td>
                  <td className="py-2.5"><Cell value={item.free} /></td>
                  <td className="py-2.5"><Cell value={item.starter} /></td>
                  <td className="py-2.5"><Cell value={item.standard} /></td>
                  <td className="py-2.5"><Cell value={item.pro} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
