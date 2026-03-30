export default function CustomerLogos() {
  const companies = ["routeblue", "FOXWAY", "FlayMaster", "PicoTours", "stayEZ"]

  return (
    <section className="w-full px-16 py-12 bg-bg-neutral">
      <div className="mx-auto max-w-[1280px] space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-heading font-semibold text-[34px] leading-[1.25] text-text">
            Powered by Stadia Maps
          </h2>
          <p className="font-body text-base text-text/70">
            Trusted by developers and companies worldwide.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white/50 rounded-lg px-8 py-4 min-w-[160px] border border-border-ui"
            >
              <span className="font-body font-semibold text-lg text-warm-gray">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
