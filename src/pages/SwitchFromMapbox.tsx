import { useState } from "react"
import Button from "@/components/ui/Button"

export default function SwitchFromMapbox() {
  const [mapsLoads, setMapsLoads] = useState(50000)
  const [staticImages, setStaticImages] = useState(10000)
  const [vectorTiles, setVectorTiles] = useState(100000)
  const [rasterTiles, setRasterTiles] = useState(50000)
  const [routerTiles, setRouterTiles] = useState(25000)

  const calculateMapboxCost = () => {
    return (
      (mapsLoads / 1000) * 5.5 +
      (staticImages / 1000) * 2 +
      (vectorTiles / 1000) * 0.25 +
      (rasterTiles / 1000) * 0.15 +
      (routerTiles / 1000) * 0.4
    )
  }

  const calculateStadiaCost = () => {
    return (
      (mapsLoads / 1000) * 0.5 +
      (staticImages / 1000) * 0.2 +
      (vectorTiles / 1000) * 0.025 +
      (rasterTiles / 1000) * 0.015 +
      (routerTiles / 1000) * 0.04
    )
  }

  const mapboxCost = calculateMapboxCost()
  const stadiaCost = calculateStadiaCost()
  const savings = ((mapboxCost - stadiaCost) / mapboxCost) * 100

  const advantages = [
    {
      title: "Real Human Support",
      description:
        "Talk to actual engineers who build the platform. No chatbots, no outsourced support teams. Get answers from people who understand your technical challenges.",
      link: "#support",
    },
    {
      title: "Fresh Satellite Imagery",
      description:
        "Access up-to-date satellite imagery that's regularly refreshed. Perfect for applications requiring current terrain and infrastructure visibility.",
      link: "#imagery",
    },
    {
      title: "Flexible Routing API",
      description:
        "Multi-modal routing with extensive customization options. Optimize for cars, bikes, pedestrians, or transit. Real-time traffic and matrix routing included.",
      link: "#routing",
    },
    {
      title: "Commitment to Privacy",
      description:
        "Your data stays yours. No tracking, no data selling, no advertising. GDPR compliant infrastructure built for developers who care about user privacy.",
      link: "#privacy",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full px-6 md:px-16 py-16">
        <div className="max-w-[1280px] mx-auto space-y-8">
          <h1 className="font-heading font-semibold text-3xl md:text-[50px] leading-[1.25] text-text">
            Switch from Mapbox Today & Save up to 90%
          </h1>

          <div className="border-l-4 border-accent-bright bg-accent/5 p-6 rounded-r-lg">
            <p className="font-body text-base text-text leading-relaxed">
              "Switching from Mapbox to Stadia Maps took less than 30 minutes. The API compatibility made migration painless, and we're now saving over $3,000 per month with better performance."
            </p>
            <p className="font-body text-sm text-text/70 mt-2">— Engineering Lead at routeblue</p>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="w-full px-6 md:px-16 py-16 bg-bg-neutral">
        <div className="max-w-[1280px] mx-auto space-y-8">
          <h2 className="font-heading font-semibold text-2xl md:text-[40px] leading-[1.25] text-text text-center">
            Calculate Your Savings
          </h2>
          <p className="font-body text-base text-text/70 text-center max-w-2xl mx-auto">
            Adjust the sliders below to match your monthly API usage. See how much you could save by switching to Stadia Maps.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border-ui space-y-6">
            {/* Maps Loads */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-body font-semibold text-base text-text">Maps Loads for Web</label>
                <span className="font-body text-base text-text/70">{mapsLoads.toLocaleString()} calls</span>
              </div>
              <input
                type="range"
                min="0"
                max="200000"
                step="1000"
                value={mapsLoads}
                onChange={(e) => setMapsLoads(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span className="font-body text-text/70">Mapbox: ${((mapsLoads / 1000) * 5.5).toFixed(2)}</span>
                <span className="font-body text-accent font-semibold">Stadia: ${((mapsLoads / 1000) * 0.5).toFixed(2)}</span>
              </div>
            </div>

            {/* Static Images */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-body font-semibold text-base text-text">Static Images API</label>
                <span className="font-body text-base text-text/70">{staticImages.toLocaleString()} calls</span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={staticImages}
                onChange={(e) => setStaticImages(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span className="font-body text-text/70">Mapbox: ${((staticImages / 1000) * 2).toFixed(2)}</span>
                <span className="font-body text-accent font-semibold">Stadia: ${((staticImages / 1000) * 0.2).toFixed(2)}</span>
              </div>
            </div>

            {/* Vector Tiles */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-body font-semibold text-base text-text">Vector Tiles API</label>
                <span className="font-body text-base text-text/70">{vectorTiles.toLocaleString()} calls</span>
              </div>
              <input
                type="range"
                min="0"
                max="500000"
                step="5000"
                value={vectorTiles}
                onChange={(e) => setVectorTiles(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span className="font-body text-text/70">Mapbox: ${((vectorTiles / 1000) * 0.25).toFixed(2)}</span>
                <span className="font-body text-accent font-semibold">Stadia: ${((vectorTiles / 1000) * 0.025).toFixed(2)}</span>
              </div>
            </div>

            {/* Raster Tiles */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-body font-semibold text-base text-text">Raster Tiles API</label>
                <span className="font-body text-base text-text/70">{rasterTiles.toLocaleString()} calls</span>
              </div>
              <input
                type="range"
                min="0"
                max="200000"
                step="1000"
                value={rasterTiles}
                onChange={(e) => setRasterTiles(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span className="font-body text-text/70">Mapbox: ${((rasterTiles / 1000) * 0.15).toFixed(2)}</span>
                <span className="font-body text-accent font-semibold">Stadia: ${((rasterTiles / 1000) * 0.015).toFixed(2)}</span>
              </div>
            </div>

            {/* Router Tiles */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-body font-semibold text-base text-text">Router Tiles API</label>
                <span className="font-body text-base text-text/70">{routerTiles.toLocaleString()} calls</span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={routerTiles}
                onChange={(e) => setRouterTiles(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span className="font-body text-text/70">Mapbox: ${((routerTiles / 1000) * 0.4).toFixed(2)}</span>
                <span className="font-body text-accent font-semibold">Stadia: ${((routerTiles / 1000) * 0.04).toFixed(2)}</span>
              </div>
            </div>

            {/* Total Summary */}
            <div className="border-t border-border-ui pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-heading font-semibold text-xl text-text">Monthly Total</span>
                <div className="text-right">
                  <div className="font-body text-text/70 line-through">${mapboxCost.toFixed(2)}</div>
                  <div className="font-heading font-semibold text-2xl text-accent">${stadiaCost.toFixed(2)}</div>
                </div>
              </div>
              <div className="bg-accent/10 rounded-lg p-4 text-center">
                <p className="font-heading font-semibold text-2xl text-accent-bright">
                  Save {savings.toFixed(0)}% per month
                </p>
                <p className="font-body text-sm text-text/70 mt-1">
                  That's ${(mapboxCost - stadiaCost).toFixed(2)} saved every month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="w-full px-6 md:px-16 py-16">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <h2 className="font-heading font-semibold text-2xl md:text-[40px] leading-[1.25] text-text text-center">
            The Stadia Maps Advantage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="border border-border-ui rounded-2xl p-6 space-y-4">
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-text">{advantage.title}</h3>
                <p className="font-body text-base text-text/70 leading-relaxed">{advantage.description}</p>
                <a href={advantage.link} className="inline-block font-body text-base text-accent hover:text-accent-bright transition-colors">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration CTA */}
      <section className="w-full px-6 md:px-16 py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-[1280px] mx-auto space-y-8 text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-[40px] leading-[1.25] text-text">
            Choose privacy & affordability today!
          </h2>
          <p className="font-body text-lg text-text/70 max-w-2xl mx-auto">
            Switch your basemaps in two lines of code
          </p>

          <div className="bg-text rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-left overflow-x-auto">
            <div className="space-y-4">
              <div>
                <div className="font-body text-sm text-white/50 mb-2">Before (Mapbox):</div>
                <pre className="font-code text-sm text-white">
                  <code>{`style: 'mapbox://styles/mapbox/streets-v11'`}</code>
                </pre>
              </div>
              <div>
                <div className="font-body text-sm text-white/50 mb-2">After (Stadia Maps):</div>
                <pre className="font-code text-sm text-accent-bright">
                  <code>{`style: 'https://tiles.stadiamaps.com/styles/alidade_smooth.json'`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">Get started for free</Button>
            <Button variant="secondary">View migration guide</Button>
          </div>
        </div>
      </section>

      {/* Switch Your APIs */}
      <section className="w-full px-6 md:px-16 py-16">
        <div className="max-w-[1280px] mx-auto space-y-6 text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-[40px] leading-[1.25] text-text">
            Switch Your APIs
          </h2>
          <p className="font-body text-base text-text/70 max-w-2xl mx-auto leading-relaxed">
            Our APIs are designed to be compatible with Mapbox GL JS and other popular mapping libraries. Most migrations require minimal code changes, and our documentation provides step-by-step guides for common frameworks.
          </p>
          <div className="pt-4">
            <Button variant="primary">Explore documentation</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
