type CellValue = true | false | string

const features: { category: string; items: { name: string; free: CellValue; starter: CellValue; standard: CellValue; pro: CellValue }[] }[] = [
  {
    category: "Maps",
    items: [
      { name: "Vector Basemaps", free: true, starter: true, standard: true, pro: true },
      { name: "Raster Basemaps", free: true, starter: true, standard: true, pro: true },
      { name: "Satellite Imagery", free: false, starter: false, standard: true, pro: true },
      { name: "Additional Data Tilesets", free: true, starter: true, standard: true, pro: true },
      { name: "Static Maps", free: false, starter: true, standard: true, pro: true },
      { name: "Cacheable Static Maps", free: false, starter: true, standard: true, pro: true },
    ],
  },
  {
    category: "Search & Geocoding",
    items: [
      { name: "Autocomplete Search v2", free: true, starter: true, standard: true, pro: true },
      { name: "Autocomplete Search v1", free: true, starter: true, standard: true, pro: true },
      { name: "Forward Geocoding", free: "Temp storage", starter: "Temp storage", standard: "Persistent storage", pro: "Persistent storage" },
      { name: "Structured Geocoding", free: false, starter: "Temp storage", standard: "Persistent storage", pro: "Persistent storage" },
      { name: "Reverse Geocoding", free: false, starter: "Temp storage", standard: "Persistent storage", pro: "Persistent storage" },
      { name: "Bulk Geocoding", free: false, starter: false, standard: true, pro: true },
      { name: "Place Lookup", free: "Temp storage", starter: "Temp storage", standard: "Persistent storage", pro: "Persistent storage" },
    ],
  },
  {
    category: "Routing & Navigation",
    items: [
      { name: "Standard Routing", free: true, starter: true, standard: true, pro: true },
      { name: "Nearest Roads", free: false, starter: false, standard: true, pro: true },
      { name: "Map Matching", free: false, starter: false, standard: true, pro: true },
      { name: "Trace Attributes", free: false, starter: false, standard: true, pro: true },
      { name: "Isochrones", free: false, starter: false, standard: true, pro: true },
      { name: "Optimized Routing", free: false, starter: false, standard: true, pro: true },
      { name: "Time/Distance Matrix", free: false, starter: false, standard: "625 elements", pro: "10,000 elements" },
    ],
  },
  {
    category: "Data APIs",
    items: [
      { name: "Time Zones", free: true, starter: true, standard: true, pro: true },
      { name: "Elevation", free: false, starter: true, standard: true, pro: true },
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
  return (
    <section className="px-6 md:px-20 py-16 bg-bg-neutral/20">
      <div className="max-w-[960px] mx-auto">
        <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25] text-center mb-10">
          Feature Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left font-heading font-semibold text-base py-3 pr-4">
                  Feature
                </th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[110px]">
                  Free
                </th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[110px]">
                  Starter
                </th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[110px]">
                  Standard
                </th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[110px]">
                  Professional
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((group) => (
                <Fragment key={group.category}>
                  <tr>
                    <td
                      colSpan={5}
                      className="font-heading font-semibold text-sm uppercase tracking-wider pt-6 pb-2 text-warm-gray"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.items.map((item) => (
                    <tr key={item.name} className="border-b border-bg-neutral">
                      <td className="font-body text-base py-2.5 pr-4">{item.name}</td>
                      <td className="py-2.5">
                        <Cell value={item.free} />
                      </td>
                      <td className="py-2.5">
                        <Cell value={item.starter} />
                      </td>
                      <td className="py-2.5">
                        <Cell value={item.standard} />
                      </td>
                      <td className="py-2.5">
                        <Cell value={item.pro} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

import { Fragment } from "react"
