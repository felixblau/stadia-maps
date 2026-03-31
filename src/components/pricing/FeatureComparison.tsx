const features = [
  {
    category: "Basemaps",
    items: [
      { name: "Vector Basemaps", free: true, starter: true, standard: true, pro: true },
      { name: "Raster Basemaps", free: true, starter: true, standard: true, pro: true },
      { name: "Satellite Imagery", free: false, starter: false, standard: true, pro: true },
    ],
  },
  {
    category: "Maps",
    items: [
      { name: "Static Maps", free: false, starter: true, standard: true, pro: true },
      { name: "Cacheable Static Maps", free: false, starter: true, standard: true, pro: true },
    ],
  },
  {
    category: "Search & Geocoding",
    items: [
      { name: "Autocomplete Search", free: true, starter: true, standard: true, pro: true },
      { name: "Geocoding APIs", free: true, starter: true, standard: true, pro: true },
    ],
  },
  {
    category: "Routing & Navigation",
    items: [
      { name: "Routing APIs", free: true, starter: true, standard: true, pro: true },
      { name: "Optimized Routing", free: true, starter: true, standard: true, pro: true },
      { name: "Time/Distance Matrix", free: true, starter: true, standard: true, pro: true },
      { name: "Isochrones", free: true, starter: true, standard: true, pro: true },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Time Zones", free: true, starter: true, standard: true, pro: true },
      { name: "Elevation", free: true, starter: true, standard: true, pro: true },
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

export default function FeatureComparison() {
  return (
    <section className="px-6 md:px-20 py-16 bg-bg-neutral/20">
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25] text-center mb-10">
          Feature Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left font-heading font-semibold text-base py-3 pr-4">Feature</th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[100px]">Free</th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[100px]">Starter</th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[100px]">Standard</th>
                <th className="text-center font-heading font-semibold text-base py-3 w-[100px]">Professional</th>
              </tr>
            </thead>
            <tbody>
              {features.map((group) => (
                <>
                  <tr key={group.category}>
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
                      <td className="py-2.5">{item.free ? <Check /> : <Cross />}</td>
                      <td className="py-2.5">{item.starter ? <Check /> : <Cross />}</td>
                      <td className="py-2.5">{item.standard ? <Check /> : <Cross />}</td>
                      <td className="py-2.5">{item.pro ? <Check /> : <Cross />}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
