import PricingHero from "@/components/pricing/PricingHero"
import CreditSystem from "@/components/pricing/CreditSystem"
import PlanPicker from "@/components/pricing/PlanPicker"
import CostCalculator from "@/components/pricing/CostCalculator"
import CustomInfra from "@/components/pricing/CustomInfra"

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <CreditSystem />
      <PlanPicker />
      <CostCalculator />
      <CustomInfra />
    </>
  )
}
