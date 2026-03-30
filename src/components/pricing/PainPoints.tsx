export default function PainPoints() {
  return (
    <section className="px-16 py-16 max-w-[1280px] mx-auto">
      <h2 className="font-heading font-semibold text-[40px] leading-[1.25] mb-8">
        Punitive pricing sucks. You deserve better.
      </h2>

      <div className="space-y-6 mb-8">
        <div className="border-l-4 border-accent-bright pl-6 py-4">
          <h3 className="font-heading font-semibold text-[24px] mb-2">
            Stop paying a tax on fear.
          </h3>
          <p className="font-body text-base text-warm-gray">
            Most location API providers trap you with unpredictable billing that spikes when you need it most.
            One viral post? A successful campaign? Suddenly your infrastructure costs explode. You're not paying
            for value—you're paying a tax on success and uncertainty.
          </p>
        </div>

        <div className="border-l-4 border-accent-bright pl-6 py-4">
          <h3 className="font-heading font-semibold text-[24px] mb-2">
            Why is Location API billing so complex?
          </h3>
          <p className="font-body text-base text-warm-gray">
            Because they want it that way. Different rates for geocoding, routing, tile serving, autocomplete—each
            with its own pricing tiers, volume discounts, and hidden gotchas. It takes a spreadsheet just to estimate
            your monthly bill. And when you need multiple services? Good luck predicting anything.
          </p>
        </div>
      </div>

      <p className="font-body text-base text-warm-gray mb-4">
        The result? Constant stress, unnecessary complexity, and surprise budget overruns that make scaling impossible.
      </p>

      <p className="font-heading font-semibold text-[18px]">
        It's time for a change. It's time for Stadia Maps.
      </p>
    </section>
  )
}
