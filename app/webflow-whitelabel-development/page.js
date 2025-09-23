import WebflowWhitelabelHero from "../components/heroSection/webflowwhitelabel"
import FaqSection from "./sections/faqsection"
import HowToConnect from "./sections/howtoconnect"
import WebflowTrustSection from "./sections/trustsection"
import WhyMakeIntegriti from "./sections/WhyMakeIntegriti"
import WhyWebflow from "./sections/WhyWebflow"
// import ThemeDesign from "./sections/ThemeDesign"
export default function WebflowSupportPage() {
  return (
    <>
    <WebflowWhitelabelHero/>
      <WhyWebflow />
      <WhyMakeIntegriti />
      <WebflowTrustSection />
      <HowToConnect />
      <FaqSection />
    </>
  )
}
