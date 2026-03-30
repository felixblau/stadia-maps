import Button from "@/components/ui/Button"

export default function Prefooter() {
  return (
    <section
      className="flex flex-col items-center px-16 py-12 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.75), rgba(255,255,255,0.75)), linear-gradient(238deg, #F1F8FF 1.7%, #659ACC 101.4%)",
      }}
    >
      <div className="bg-white rounded-2xl p-12 max-w-[1000px] w-full flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading font-semibold text-[40px] leading-[1.25] text-text">
            Business Outcomes That Fuel Your Growth
          </h2>
          <p className="font-body font-semibold text-lg leading-[1.25] text-text">
            With Stadia Maps, you build the solutions that matter. Logistics platforms provide
            accurate ETAs, fleet management apps reduce fuel costs, and emergency dispatch systems
            improve response times.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="primary">Get started for free</Button>
          <Button variant="secondary">Explore documentation</Button>
          <Button variant="secondary">Contact us</Button>
        </div>
      </div>
    </section>
  )
}
