export default function ROISection() {
  const metrics = [
    {
      value: "13.3M+",
      label: "fleet miles optimized",
      description: "Customers save fuel costs with efficient routing",
    },
    {
      value: "1.8s",
      label: "avg API response",
      description: "Fast enough to power real-time user experiences",
    },
    {
      value: "47%",
      label: "cost reduction",
      description: "vs. legacy providers when switching to Stadia Maps",
    },
    {
      value: "100%",
      label: "data ownership",
      description: "You own your queries. We never sell your data.",
    },
  ]

  return (
    <section className="w-full px-16 py-16 bg-bg-neutral">
      <div className="mx-auto max-w-[1280px] space-y-12">
        <h2 className="font-heading font-semibold text-[40px] leading-[1.25] text-text text-center">
          Business Outcomes That Fuel Your Growth
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-border-ui space-y-3"
            >
              <div className="font-heading font-semibold text-[50px] leading-[1.25] text-primary">
                {metric.value}
              </div>
              <div className="font-body font-semibold text-lg text-text">{metric.label}</div>
              <p className="font-body text-base text-text/70">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
