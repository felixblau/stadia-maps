export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  { slug: "ai-tools-api-companies", title: "AI Tools for API Companies: 4 Design Principles for AI-Native API Consumption", excerpt: "The four design principles we discovered for building tools for AI that models actually use and understand.", date: "8/6/2025", readTime: "6 min read", content: "Full article content here..." },
  { slug: "auto-generation-failed", title: "AI Tools for API Companies: AI Needs Context, or How Our Auto-Generation Failed Spectacularly", excerpt: "Why an obvious approach to feeding API schemas into language models went wrong.", date: "7/15/2025", readTime: "8 min read", content: "Full article content here..." },
  { slug: "enriching-geocoding", title: "Enriching Geocoding & Search: More Data, Smarter Deduplication, and Forward & Reverse v2", excerpt: "Our latest geocoding updates: richer results, better accuracy, and improved deduplication.", date: "6/20/2025", readTime: "10 min read", content: "Full article content here..." },
  { slug: "geocoding-v2", title: "Introducing Stadia Maps Geocoding & Search v2: Supercharge Your Results", excerpt: "Our latest geocoding updates: richer results, better accuracy.", date: "5/10/2025", readTime: "5 min read", content: "Full article..." },
  { slug: "satellite-imagery-refresh", title: "2025 Satellite Imagery Map Refresh", excerpt: "The first design in mapbox was discovered for building search filters.", date: "4/22/2025", readTime: "4 min read", content: "Full article..." },
  { slug: "foursquare-os-places", title: "Announcing Foursquare OS Places Beta", excerpt: "Why our advocacy approach for building MCP servers landed gracefully.", date: "3/15/2025", readTime: "15 min read", content: "Full article..." },
]
