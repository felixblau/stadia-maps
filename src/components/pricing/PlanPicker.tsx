import Button from "@/components/ui/Button"

const plans = [
  {
    name: "Free",
    price: 0,
    credits: "200,000",
    overage: null,
    tagline: "Prototyping, personal projects, and non-commercial proof-of-concepts",
    features: [
      "Standard basemaps",
      "Basic APIs only",
      { text: "Commercial use", note: "*", allowed: false },
    ],
  },
  {
    name: "Starter",
    price: 20,
    credits: "1,000,000",
    overage: "3¢",
    tagline: "Commercial launch for startups and localized business tools",
    features: [
      "Standard basemaps",
      { text: "Add static maps & geocoding APIs", bold: true },
      { text: "Commercial use", note: "*", allowed: true },
    ],
  },
  {
    name: "Standard",
    price: 80,
    credits: "7,500,000",
    overage: "2¢",
    tagline: "High-traffic production apps and global data visualizations",
    features: [
      { text: "Add satellite basemaps", bold: true },
      "Access to all APIs",
      { text: "Commercial use", note: "*", allowed: true },
    ],
  },
  {
    name: "Professional",
    price: 250,
    credits: "25,000,000",
    overage: "1.5¢",
    tagline: "Deployments requiring guaranteed performance and priority support",
    features: [
      "Includes all basemaps",
      { text: "Unlock higher limits and all APIs", bold: true },
      { text: "Commercial use", note: "*", allowed: true },
    ],
  },
]

type Feature = string | { text: string; bold?: boolean; note?: string; allowed?: boolean }

function FeatureItem({ feature }: { feature: Feature }) {
  if (typeof feature === "string") {
    return <li className="font-body text-sm leading-[1.4] py-1 border-b border-bg-neutral last:border-0">{feature}</li>
  }
  if (feature.allowed === false) {
    return (
      <li className="font-body text-sm leading-[1.4] py-1 border-b border-bg-neutral last:border-0 line-through opacity-60">
        {feature.text}{feature.note && <sup>{feature.note}</sup>} not allowed
      </li>
    )
  }
  return (
    <li className={`font-body text-sm leading-[1.4] py-1 border-b border-bg-neutral last:border-0 ${feature.bold ? "font-semibold" : ""}`}>
      {feature.text}{feature.note && <sup>{feature.note}</sup>}{feature.allowed !== undefined ? " allowed" : ""}
    </li>
  )
}

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
              className="border border-primary rounded-2xl px-5 py-4 flex flex-col"
            >
              <h3 className="font-heading font-normal text-2xl leading-[1.5] mb-3">{plan.name}</h3>

              {/* Price */}
              <div className="mb-1">
                <span className="font-heading font-semibold text-[36px] leading-none">
                  <sup className="text-lg font-normal align-top">$</sup>
                  {plan.price}
                </span>
                <span className="font-body text-sm text-warm-gray">/month</span>
              </div>

              {/* Overage */}
              <p className="font-body text-xs text-warm-gray mb-3">
                {plan.overage
                  ? `${plan.overage}/thousand additional credits`
                  : "No additional usage"}
              </p>

              {/* Included credits */}
              <div className="bg-bg-neutral/40 rounded-lg px-3 py-2 mb-3 text-center">
                <p className="font-body font-semibold text-sm">{plan.credits} credits/month</p>
              </div>

              {/* Features */}
              <ul className="flex-1 mb-4">
                {plan.features.map((feature, i) => (
                  <FeatureItem key={i} feature={feature} />
                ))}
              </ul>

              <Button variant="secondary" className="w-full">
                {plan.price === 0 ? "Get started today!" : "Get started today!"}
              </Button>
            </div>
          ))}
        </div>

        {/* Expand link */}
        <div className="flex items-center justify-center gap-2 text-primary">
          <span className="font-body font-semibold text-lg leading-[1.25]">
            View complete features list
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
