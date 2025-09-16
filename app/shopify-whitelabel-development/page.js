import ShopifyWhitelabelHero from "../components/heroSection/shopifywhitelabel";
import TrustSection from "./sections.js/trustsection";
import FocusClientSection from "./sections.js/focusonclientsection";
import HowToConnect from "./sections.js/howtoconnect";
import FaqSection from "./sections.js/faqsection";
import FeatureSection from "./sections.js/featuresection";

export default function page() {
  return (
    <>
    <ShopifyWhitelabelHero />
    <FeatureSection />
    <FocusClientSection />
    <TrustSection />
    <HowToConnect />
    <FaqSection />
    
    </>
  )
}
