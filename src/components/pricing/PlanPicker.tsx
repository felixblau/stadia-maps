import Button from "@/components/ui/Button"

const plans = [
  {
    name: "Free",
    tagline: "Start building in minutes",
    description: "Non-commercial use of Standard Basemaps and Basic APIs.",
  },
  {
    name: "Essentials",
    tagline: "Core commercial functionality unlocked",
    description: "Standard Basemaps plus Static Maps and Geocoding APIs",
  },
  {
    name: "Standard",
    tagline: "Complete location toolkit ready for production",
    description: "Full API Access & Satellite Basemaps",
  },
  {
    name: "Professional",
    tagline: "Guaranteed performance and priority support",
    description: "Unlock higher limits and all APIs",
  },
]

export default function PlanPicker() {
  return (
    <section className="px-6 md:px-20 py-16 max-w-[1440px] mx-auto">
      <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25] text-center mb-8">
        Find Your Power Plan
      </h2>

      <p className="font-heading font-normal text-lg md:text-2xl leading-[1.5] text-center max-w-[860px] mx-auto mb-8">
        All new accounts receive a no-obligation 14-day trial of Stadia Maps Professional. No
        credit card required. Evaluate performance, support, and APIs, risk-free.{" "}
        <span className="font-bold">
          Your account remains on the free plan after your trial unless you choose to upgrade.
        </span>
      </p>

      <div className="max-w-[900px] mx-auto flex flex-col gap-6">
        {/* GDPR callout */}
        <div
          className="flex gap-4 items-center p-4 rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.5)), linear-gradient(217deg, #EFF3FF 1.7%, #FFEBE4 101.4%)",
          }}
        >
          <img
            src="/images/gdpr-shield.png"
            alt="GDPR compliant"
            className="w-[76px] h-[76px] object-cover rounded"
          />
          <div className="flex flex-col gap-3 leading-[1.25]">
            <p className="font-body font-semibold text-lg text-black">
              GDPR Compliant. Zero Advertising Bias. Your Data Remains Yours.
            </p>
            <p className="font-body text-lg">
              We believe privacy is the foundation of trust, not a premium feature.
            </p>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-primary rounded-2xl px-6 py-4 flex flex-col gap-3"
            >
              <h3 className="font-heading font-normal text-2xl leading-[1.5]">{plan.name}</h3>
              <div className="flex-1 flex flex-col gap-2">
                <p className="font-body text-base leading-[1.25]">{plan.tagline}</p>
                <p className="font-heading font-normal text-sm leading-[1.25] opacity-75">
                  {plan.description}
                </p>
              </div>
              <Button variant="secondary">Try for free</Button>
            </div>
          ))}
        </div>

        {/* Expand link */}
        <div className="flex items-center justify-center gap-2 text-primary">
          <span className="font-body font-semibold text-lg leading-[1.25]">
            View complete features list
          </span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
