import HeroSection from "@/components/home/HeroSection"
import ProblemFraming from "@/components/home/ProblemFraming"
import ComparisonToggle from "@/components/home/ComparisonToggle"
import StatsSection from "@/components/home/StatsSection"
import ApiPlayground from "@/components/home/ApiPlayground"
import CustomerLogos from "@/components/home/CustomerLogos"
import FeatureShowcase from "@/components/home/FeatureShowcase"
import ROISection from "@/components/home/ROISection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemFraming />
      <ComparisonToggle />
      <StatsSection />
      <ApiPlayground />
      <CustomerLogos />
      <FeatureShowcase />
      <ROISection />
    </>
  )
}
