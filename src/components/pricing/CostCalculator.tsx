import { useState } from "react"

export default function CostCalculator() {
  const [geocoding, setGeocoding] = useState(100000)
  const [palladium, setPalladium] = useState(50000)
  const [matrix, setMatrix] = useState(10000)
  const [routerTiles, setRouterTiles] = useState(25000)

  // Simple plan suggestion logic based on total API calls
  const totalCalls = geocoding + palladium + matrix + routerTiles
  let suggestedPlan = "Free"
  if (totalCalls > 5000000) suggestedPlan = "Professional"
  else if (totalCalls > 1000000) suggestedPlan = "Standard"
  else if (totalCalls > 200000) suggestedPlan = "Essentials"

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toString()
  }

  return (
    <section className="px-6 md:px-16 py-16 max-w-[1280px] mx-auto">
      <h2 className="font-heading font-semibold text-2xl md:text-[40px] leading-[1.25] text-center mb-4">
        Estimate your infrastructure cost: Instant clarity. Instant savings.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12">
        <div>
          <p className="font-body text-base text-warm-gray mb-6">
            Set your expected API volume using the sliders below. We'll instantly calculate your monthly cost
            and suggest the best plan for your needs. No hidden fees, no surprises—just transparent pricing
            that scales with you.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="geocoding" className="font-heading font-semibold text-[18px]">
                Geocoding
              </label>
              <span className="font-mono text-base text-warm-gray">
                {formatNumber(geocoding)} calls/mo
              </span>
            </div>
            <input
              id="geocoding"
              type="range"
              min="0"
              max="10000000"
              step="10000"
              value={geocoding}
              onChange={(e) => setGeocoding(Number(e.target.value))}
              className="w-full h-2 bg-bg-neutral rounded-lg appearance-none cursor-pointer accent-accent-bright"
            />
            <p className="text-sm text-warm-gray mt-1">
              Equivalent to ~{Math.round(geocoding / 1000)} addresses per day
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="palladium" className="font-heading font-semibold text-[18px]">
                Palladium Search
              </label>
              <span className="font-mono text-base text-warm-gray">
                {formatNumber(palladium)} calls/mo
              </span>
            </div>
            <input
              id="palladium"
              type="range"
              min="0"
              max="5000000"
              step="5000"
              value={palladium}
              onChange={(e) => setPalladium(Number(e.target.value))}
              className="w-full h-2 bg-bg-neutral rounded-lg appearance-none cursor-pointer accent-accent-bright"
            />
            <p className="text-sm text-warm-gray mt-1">
              Equivalent to ~{Math.round(palladium / 1000)} searches per day
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="matrix" className="font-heading font-semibold text-[18px]">
                Distance Matrix
              </label>
              <span className="font-mono text-base text-warm-gray">
                {formatNumber(matrix)} calls/mo
              </span>
            </div>
            <input
              id="matrix"
              type="range"
              min="0"
              max="1000000"
              step="1000"
              value={matrix}
              onChange={(e) => setMatrix(Number(e.target.value))}
              className="w-full h-2 bg-bg-neutral rounded-lg appearance-none cursor-pointer accent-accent-bright"
            />
            <p className="text-sm text-warm-gray mt-1">
              Equivalent to ~{Math.round(matrix / 30)} calculations per day
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="routerTiles" className="font-heading font-semibold text-[18px]">
                Router Tiles
              </label>
              <span className="font-mono text-base text-warm-gray">
                {formatNumber(routerTiles)} tiles/mo
              </span>
            </div>
            <input
              id="routerTiles"
              type="range"
              min="0"
              max="2000000"
              step="5000"
              value={routerTiles}
              onChange={(e) => setRouterTiles(Number(e.target.value))}
              className="w-full h-2 bg-bg-neutral rounded-lg appearance-none cursor-pointer accent-accent-bright"
            />
            <p className="text-sm text-warm-gray mt-1">
              Equivalent to ~{Math.round(routerTiles / 1000)} tile requests per day
            </p>
          </div>

          <div className="pt-6 border-t border-border-ui">
            <p className="font-body text-base text-warm-gray mb-2">
              Based on your usage estimate:
            </p>
            <p className="font-heading font-semibold text-[24px] text-accent">
              Suggested plan: {suggestedPlan}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
