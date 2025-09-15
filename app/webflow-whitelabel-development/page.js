import HeroSection from "../components/heroSection/webflowwhitelabel"
import WhyWebflow from "./sections/WhyWebflow"
import WhyMakeIntegriti from "./sections/WhyMakeIntegriti"
import TrustContainers from "./sections/TrustContainer"
// import ThemeDesign from "./sections/ThemeDesign"
export default function WebflowSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyWebflow />
      <WhyMakeIntegriti />
      <TrustContainers />
      {/* <WhyDesignDiffer />
      <ThemeDesign />
      <WhyDesignMatter />
      <MobileResponsive /> */}
    </div>
  )
}
