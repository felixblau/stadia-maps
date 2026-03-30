import PricingHero from "@/components/pricing/PricingHero"
import PainPoints from "@/components/pricing/PainPoints"
import CreditSystem from "@/components/pricing/CreditSystem"
import PlanPicker from "@/components/pricing/PlanPicker"
import CostCalculator from "@/components/pricing/CostCalculator"
import CustomInfra from "@/components/pricing/CustomInfra"

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PainPoints />
      <CreditSystem />
      <PlanPicker />
      <CostCalculator />
      <CustomInfra />
    </>
  )
}
