export default function StatsSection() {
  const stats = [
    {
      number: "99.99%",
      label: "uptime",
    },
    {
      number: "<42ms",
      label: "avg response time",
    },
    {
      number: "3.2 Billion",
      label: "API calls/year",
    },
  ]

  return (
    <section className="w-full px-16 py-16 bg-bg-neutral">
      <div className="mx-auto max-w-[1280px] space-y-12">
        <h2 className="font-heading font-semibold text-[40px] leading-[1.25] text-text text-center">
          The numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <div className="font-heading font-semibold text-[50px] leading-[1.25] text-primary">
                {stat.number}
              </div>
              <div className="font-body text-base text-text/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
