export default function ProblemFraming() {
  const features = [
    {
      icon: "📊",
      title: "Pricing Models That Make Growth Sustainable",
      description:
        "No surprise bills. No confusing tiers. Simple credit-based pricing that scales with your success. You use what you need, and you only pay for what you use.",
    },
    {
      icon: "🔒",
      title: "Your Data & Your Product",
      description:
        "We don't sell your data. We don't track your users. Your location queries belong to you. Build with confidence knowing privacy is baked into our infrastructure.",
    },
    {
      icon: "💬",
      title: "Support That Feels Good",
      description:
        "Real engineers. Real humans. No chatbots, no ticket queues that disappear into the void. When you need help, you get answers from people who actually build the platform.",
    },
  ]

  return (
    <section className="w-full px-16 py-16 bg-bg-neutral">
      <div className="mx-auto max-w-[1280px] space-y-12">
        <h2 className="font-heading font-semibold text-[40px] leading-[1.25] text-text text-center">
          The Location Platform You Deserve. Clean, Fast, and Fair.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="font-body font-semibold text-lg text-text">{feature.title}</h3>
              <p className="font-body text-base text-text/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
