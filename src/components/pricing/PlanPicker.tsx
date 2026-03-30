import Button from "@/components/ui/Button"

export default function PlanPicker() {
  const plans = [
    {
      name: "Free",
      description: "Start building today",
      features: [
        "200,000 monthly API calls",
        "All core APIs included",
        "Community support",
        "Perfect for prototyping",
      ],
      buttonText: "Try for free",
    },
    {
      name: "Essentials",
      description: "Core commercial embedded",
      features: [
        "1M monthly API calls",
        "All APIs included",
        "Email support",
        "Commercial use approved",
      ],
      buttonText: "Try for free",
    },
    {
      name: "Standard",
      description: "Complete location prediction",
      features: [
        "5M monthly API calls",
        "All APIs + premium features",
        "Priority email support",
        "Advanced analytics",
      ],
      buttonText: "Try for free",
    },
    {
      name: "Professional",
      description: "Guaranteed priority support",
      features: [
        "20M+ monthly API calls",
        "Full API access",
        "24/7 priority support",
        "Custom SLAs available",
      ],
      buttonText: "Try for free",
    },
  ]

  return (
    <section className="px-16 py-16 max-w-[1280px] mx-auto">
      <h2 className="font-heading font-semibold text-[40px] leading-[1.25] text-center mb-4">
        Find Your Power Plan
      </h2>
      <p className="font-body text-base text-warm-gray text-center mb-6">
        Start with a 14-day free trial. No credit card required. Upgrade or downgrade anytime.
      </p>

      <div className="flex items-center justify-center gap-4 mb-12 text-sm text-warm-gray">
        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-body text-base">
          GDPR Compliant. Zero Advertising/Bots. Your Data Remains Yours.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border border-border-ui rounded-2xl p-6 flex flex-col"
          >
            <h3 className="font-heading font-semibold text-[24px] mb-2">
              {plan.name}
            </h3>
            <p className="font-body text-base text-warm-gray mb-6">
              {plan.description}
            </p>
            <ul className="space-y-2 mb-6 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="font-body text-base flex items-start">
                  <svg
                    className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="primary" className="w-full">
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#features"
          className="font-body text-base text-accent hover:text-accent-bright transition-colors"
        >
          View complete features list →
        </a>
      </div>
    </section>
  )
}
