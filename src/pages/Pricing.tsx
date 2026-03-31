import PricingHero from "@/components/pricing/PricingHero"
import CreditSystem from "@/components/pricing/CreditSystem"
import PlanPicker from "@/components/pricing/PlanPicker"
import CreditSchedule from "@/components/pricing/CreditSchedule"
import FeatureComparison from "@/components/pricing/FeatureComparison"
import CostCalculator from "@/components/pricing/CostCalculator"
import CustomInfra from "@/components/pricing/CustomInfra"

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <CreditSystem />
      <PlanPicker />
      <FeatureComparison />
      <CreditSchedule />
      <CostCalculator />
      <CustomInfra />
    </>
  )
}
