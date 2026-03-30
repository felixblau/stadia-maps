import Button from "@/components/ui/Button"

export default function HeroSection() {
  return (
    <section className="w-full px-16 py-16">
      <div className="mx-auto max-w-[1280px] flex items-center gap-16">
        {/* Left side - Text content */}
        <div className="flex-1 space-y-6">
          <h1 className="font-heading font-semibold text-[50px] leading-[1.25] text-text">
            Location APIs Without Compromise
          </h1>
          <p className="font-body text-base leading-[1.25] text-text">
            Map rendering, geocoding, forward/reverse routing, and route line styling.
            Choose the location stack engineered for privacy, scale, and developer sanity.
          </p>
          <div className="pt-4">
            <Button variant="primary">Get started for free</Button>
          </div>
        </div>

        {/* Right side - Map illustration */}
        <div className="flex-1 relative">
          <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-blue-400 via-green-400 to-green-600 relative overflow-hidden shadow-xl">
            {/* Topographic-style curved lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-white/20 rounded-full"
                   style={{ transform: "translateY(-50%) scaleX(1.2)" }}></div>
              <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-white/20 rounded-full"
                   style={{ transform: "translateY(-50%) scaleX(1.1) rotate(-2deg)" }}></div>
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/30 rounded-full"
                   style={{ transform: "translateY(-50%) scaleX(1.3) rotate(1deg)" }}></div>
              <div className="absolute top-2/3 left-0 right-0 h-[2px] bg-white/20 rounded-full"
                   style={{ transform: "translateY(-50%) scaleX(1.15) rotate(-1deg)" }}></div>
            </div>

            {/* Abstract map elements */}
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white rounded-full shadow-lg"></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full shadow-lg"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-accent-bright rounded-full shadow-lg ring-4 ring-white/30"></div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
