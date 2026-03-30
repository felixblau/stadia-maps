export default function FeatureShowcase() {
  const features = [
    {
      title: "Precision Geocoding",
      description:
        "Convert addresses to coordinates and coordinates to addresses with industry-leading accuracy. Support for global coverage with local nuance. Autocomplete, batch processing, and fuzzy matching built in.",
      details: [
        "Forward & reverse geocoding",
        "Autocomplete & type-ahead search",
        "Structured & unstructured queries",
      ],
      illustration: (
        <div className="relative w-full h-[300px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center overflow-hidden">
          {/* Map grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-blue-300"></div>
              ))}
            </div>
          </div>
          {/* Location pin */}
          <div className="relative z-10">
            <svg width="60" height="80" viewBox="0 0 24 32" fill="none">
              <path
                d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                fill="#004E98"
              />
            </svg>
          </div>
        </div>
      ),
    },
    {
      title: "Routing & Navigation",
      description:
        "Turn-by-turn routing optimized for cars, bikes, pedestrians, and transit. Real-time traffic integration. Alternate routes, isochrone analysis, and matrix calculations for fleet optimization.",
      details: [
        "Multi-modal routing (car, bike, walk, transit)",
        "Turn-by-turn instructions",
        "Isochrone & matrix APIs",
      ],
      illustration: (
        <div className="relative w-full h-[300px] bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center overflow-hidden">
          {/* Route line */}
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <path
              d="M 50 250 Q 100 200 150 150 T 250 80 T 350 50"
              stroke="#004E98"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="10,5"
            />
            <circle cx="50" cy="250" r="10" fill="#FF6700" />
            <circle cx="350" cy="50" r="10" fill="#004E98" />
          </svg>
        </div>
      ),
    },
    {
      title: "Vector Tile Rendering",
      description:
        "Blazing-fast vector map tiles that render beautifully at any zoom level. Customize every aspect of the visual style. Low latency edge delivery. Works offline with caching.",
      details: [
        "Customizable visual styles",
        "Edge-cached for <50ms delivery",
        "Offline-ready with service workers",
      ],
      illustration: (
        <div className="relative w-full h-[300px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden">
          {/* Map tiles visualization */}
          <div className="grid grid-cols-3 grid-rows-3 gap-2 w-4/5 h-4/5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md border-2 border-purple-200 flex items-center justify-center"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Location Data Engineered for AI",
      description:
        "Structured geospatial data designed for LLMs and machine learning. Clean JSON responses with semantic context. Perfect for building location-aware AI agents and copilots.",
      details: [
        "LLM-friendly JSON schemas",
        "Semantic place understanding",
        "Context-rich responses for agents",
      ],
      illustration: (
        <div className="relative w-full h-[300px] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center overflow-hidden">
          {/* Data/API visualization */}
          <div className="space-y-4 w-4/5">
            <div className="h-3 bg-orange-300 rounded-full w-full"></div>
            <div className="h-3 bg-orange-400 rounded-full w-4/5"></div>
            <div className="h-3 bg-orange-300 rounded-full w-full"></div>
            <div className="h-3 bg-orange-500 rounded-full w-3/5"></div>
            <div className="h-3 bg-orange-300 rounded-full w-full"></div>
            <div className="h-3 bg-orange-400 rounded-full w-2/3"></div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="w-full px-6 md:px-16 py-16">
      <div className="mx-auto max-w-[1280px] space-y-12 md:space-y-16">
        <h2 className="font-heading font-semibold text-2xl md:text-[40px] leading-[1.25] text-text text-center">
          The Complete API Toolkit. Built to Scale.
        </h2>

        <div className="space-y-12 md:space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image/illustration side */}
              <div className="flex-1 w-full">{feature.illustration}</div>

              {/* Text side */}
              <div className="flex-1 space-y-6">
                <h3 className="font-heading font-semibold text-2xl md:text-[34px] leading-[1.25] text-text">
                  {feature.title}
                </h3>
                <p className="font-body text-base text-text/70 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-bright mt-1">✓</span>
                      <span className="font-body text-base text-text">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
