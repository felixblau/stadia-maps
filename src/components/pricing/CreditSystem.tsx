export default function CreditSystem() {
  return (
    <section className="px-16 py-16 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-heading font-semibold text-[40px] leading-[1.25] mb-4">
            The Stadia Maps Credit System: Ultimate transparency. Zero billing shock.
          </h2>
          <p className="font-body text-base text-warm-gray">
            We've built a unified credit system that consolidates all our location APIs into a single, predictable
            unit. No more juggling multiple rate cards or trying to predict which API will cost what. Credits give
            you complete visibility into your usage and costs—before you commit.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-heading font-semibold text-[24px] mb-2">
              Eliminate Billing Shock
            </h3>
            <p className="font-body text-base text-warm-gray">
              Every API call costs a flat, predictable amount of credits. Geocoding, routing, maps, autocomplete—all
              priced transparently. You'll always know exactly what you're paying for.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[24px] mb-2">
              Scale with Predictability
            </h3>
            <p className="font-body text-base text-warm-gray">
              Choose a plan that fits your usage, and scale up or down as needed. Our flexible credit system grows
              with your business—no surprises, no penalties, no stress.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[24px] mb-2">
              Ship Faster
            </h3>
            <p className="font-body text-base text-warm-gray">
              Stop building complex billing logic and start building features. Our developer-first design means
              you can integrate once and use any of our APIs without rearchitecting your billing system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
