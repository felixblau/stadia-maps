export type Product = {
  slug: string
  category: string
  title: string
  description: string
  features: { title: string; description: string }[]
}

export const products: Record<string, Product> = {
  maps: {
    slug: "maps",
    category: "Map APIs",
    title: "Maps for Every App",
    description: "Stadia Maps saves you time and money, eliminates mapping complexities and compliance headaches, and provides the performance, reliability, and support you deserve.",
    features: [
      { title: "Interactive Basemaps", description: "Immersive map-based experiences. Combine your favorite open-source map SDK with our Tiles to create Interactive Basemaps with exceptional flexibility, control, and support." },
      { title: "Static Maps", description: "Simple, embeddable map images. Choose Static Maps as a cost-effective, easy way to integrate maps into your website, email, or app." },
      { title: "Map Styles", description: "Highlight the right context for every situation with beautiful Map Styles that enhance your map's functionality and aesthetic appeal on web, mobile, and desktop applications." },
    ],
  },
  routing: {
    slug: "routing",
    category: "Routing & Navigation",
    title: "Routing & Navigation APIs",
    description: "Turn-by-turn directions, optimized routing, and navigation SDKs for every platform.",
    features: [
      { title: "Turn-by-Turn Directions", description: "Precise, real-time navigation instructions for drivers, pedestrians, and cyclists." },
      { title: "Matrix Routing", description: "Calculate travel times and distances between multiple origins and destinations efficiently." },
      { title: "Traffic-Influenced Routing", description: "Real-time and historical traffic data for more accurate ETAs and route planning." },
    ],
  },
  geocoding: {
    slug: "geocoding",
    category: "Geocoding & Search",
    title: "Precision Geocoding",
    description: "Forward and reverse geocoding with autocomplete search, powered by open data.",
    features: [
      { title: "Autocomplete Search", description: "Fast, typo-tolerant place search that works as users type." },
      { title: "Forward Geocoding", description: "Convert addresses and place names to geographic coordinates." },
      { title: "Reverse Geocoding", description: "Convert coordinates back to human-readable addresses." },
    ],
  },
}
