export default function PricingHero() {
  return (
    <section
      className="flex flex-col gap-14 items-center px-6 md:px-20 py-16"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.75), rgba(255,255,255,0.75)), linear-gradient(255deg, #F1F8FF 1.7%, #659ACC 101.4%)",
      }}
    >
      {/* Hero text */}
      <div className="flex flex-col gap-6 items-center text-center max-w-[700px]">
        <h1 className="font-heading font-semibold text-[40px] md:text-[50px] leading-[1.25]">
          Scalable Pricing for Location APIs
        </h1>
        <p className="font-heading font-normal text-lg md:text-2xl leading-[1.5] max-w-[558px]">
          End surprise billing. Simplify vendor complexity. Get back to building and scaling.
        </p>
      </div>

      {/* Pain points */}
      <div className="flex flex-col gap-8 items-center w-full max-w-[816px]">
        <h2 className="font-heading font-semibold text-2xl text-center leading-[1.5]">
          Punitive pricing sucks. You deserve better.
        </h2>

        <div className="flex flex-col gap-4 w-full">
          <div className="bg-white rounded-2xl flex flex-col md:flex-row items-start overflow-clip">
            <div className="w-full md:w-[145px] h-[138px] overflow-hidden flex-shrink-0">
              <img
                src="/images/pricing-hero-bg.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 text-lg leading-[1.25]">
              <p className="font-body font-semibold">Stop paying a tax on fear.</p>
              <p className="font-body">
                Providers shouldn't punish growth with sudden, unpredictable charges and stressful
                vendor lock-in.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl flex flex-col md:flex-row items-start overflow-clip">
            <div className="w-full md:w-[145px] h-[138px] overflow-hidden flex-shrink-0">
              <img
                src="/images/pricing-hero-bg.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 text-lg leading-[1.25]">
              <p className="font-body font-semibold">Why is Location API billing so complex?</p>
              <p className="font-body">
                Providers shouldn't force you to juggle separate metrics: tile views, geocoding
                lookups, routing calculations, and more.
              </p>
            </div>
          </div>
        </div>

        <p className="font-body text-lg text-center leading-[1.25] max-w-[738px]">
          The result? Constant stress, unnecessary complexity, and surprise budget overruns that make
          scaling impossible.
        </p>
        <p className="font-body font-semibold text-lg text-center leading-[1.25]">
          It's time for a change. It's time for Stadia Maps.
        </p>
      </div>

      {/* Logo divider */}
      <div className="relative">
        <img src="/images/stadia-logo-icon.svg" alt="" className="w-[45px] h-[36px]" />
      </div>
    </section>
  )
}
