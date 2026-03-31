export default function CreditSystem() {
  return (
    <section className="px-6 md:px-20 py-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column - heading */}
        <div className="flex flex-col gap-8 py-6 lg:w-1/2">
          <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25]">
            The Stadia Maps Credit System: Ultimate transparency. Zero billing shock.
          </h2>
          <p className="font-heading font-normal text-xl md:text-2xl leading-[1.5]">
            We cut through the complexity by consolidating all API interactions into Credits, a
            single, universal currency. This level of transparency and predictability frees you to
            innovate with confidence.
          </p>
        </div>

        {/* Right column - talking points */}
        <div className="flex flex-col lg:w-1/2">
          <div className="flex flex-col gap-4 border-b border-bg-neutral p-6">
            <h3 className="font-heading font-normal text-2xl leading-[1.5]">
              Eliminate Billing Shock
            </h3>
            <p className="font-body text-lg leading-[1.25] opacity-75">
              Every plan includes a clear, fixed pool of Credits. Our commitment is to opt-in
              scaling, protecting you from unexpected bills, and keeping you in complete control of
              your budget.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-b border-bg-neutral p-6">
            <h3 className="font-heading font-normal text-2xl leading-[1.5]">
              Scale with Predictability
            </h3>
            <p className="font-body text-lg leading-[1.25] opacity-75">
              No punitive fees, no forced migrations. Grow on your own terms with flexible plans for
              enterprise confidence and guaranteed SLA confidence.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-b border-bg-neutral p-6">
            <h3 className="font-heading font-normal text-2xl leading-[1.5]">Ship Faster</h3>
            <p className="font-body text-lg leading-[1.25] opacity-75">
              Intuitive plans designed by developers for immediate, stress-free integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
