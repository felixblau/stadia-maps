import { useState } from "react"

const parameters = [
  { id: "param1", label: "Parameter 1", description: "Neque diam ac et elementum.", max: 50, initial: 5 },
  { id: "param2", label: "Parameter 2", description: "Morbi nunc nunc massa nullam donec at tempus enim sagittis.", max: 100, initial: 12 },
  { id: "param3", label: "Parameter 3", description: "Nullam porttitor nunc ultrices eros donec faucibus nibh sem.", max: 50, initial: 3 },
  { id: "param4", label: "Parameter 4", description: "Pharetra sed integer quis malesuada.", max: 500, initial: 100 },
]

export default function CostCalculator() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(parameters.map((p) => [p.id, p.initial]))
  )

  const total = Object.values(values).reduce((a, b) => a + b, 0)
  let suggestedPlan = "Free"
  if (total > 200) suggestedPlan = "Professional"
  else if (total > 100) suggestedPlan = "Standard"
  else if (total > 20) suggestedPlan = "Essentials"

  return (
    <section
      className="px-6 md:px-20 py-16"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.75), rgba(255,255,255,0.75)), linear-gradient(253deg, #F1F8FF 1.7%, #659ACC 101.4%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-heading font-semibold text-[32px] md:text-[40px] leading-[1.25] text-center mb-8">
          Estimate your infrastructure cost:
          <br />
          Instant clarity. Instant savings.
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left description */}
          <div className="lg:w-[400px] flex flex-col gap-6">
            <p className="font-heading font-normal text-xl md:text-2xl leading-[1.5]">
              Set your expected API volume using the sliders below. Instantly preview your estimated
              spend and our recommended plan based on your deployment requirements.
            </p>
            <p className="font-heading font-semibold text-xl md:text-2xl leading-[1.5]">
              No hidden calculators. No required emails.
            </p>
          </div>

          {/* Right sliders */}
          <div className="flex-1 bg-white rounded-2xl px-6 py-4">
            {parameters.map((param, i) => (
              <div
                key={param.id}
                className={`flex flex-col md:flex-row gap-4 md:items-start py-6 ${
                  i < parameters.length - 1 ? "border-b border-bg-neutral" : "border-b border-text"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-lg leading-[1.25]">{param.label}</p>
                  <p className="font-body text-base leading-[1.25]">{param.description}</p>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <input
                    type="range"
                    min={0}
                    max={param.max}
                    value={values[param.id]}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [param.id]: Number(e.target.value) }))
                    }
                    className="w-[250px] md:w-[368px] h-[6px] bg-black/20 rounded-[3px] appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                      [&::-webkit-slider-thumb]:shadow-[0_0.5px_4px_rgba(0,0,0,0.12),0_6px_13px_rgba(0,0,0,0.12)]"
                  />
                  <div className="w-14 h-9 border border-bg-neutral rounded-lg flex items-center justify-center">
                    <span className="font-body text-base text-center">{values[param.id]}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Suggested plan */}
            <div className="py-4 text-right">
              <p className="font-body text-lg leading-[1.25]">
                <span>Suggested plan: </span>
                <span className="font-body font-semibold text-primary">{suggestedPlan}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
