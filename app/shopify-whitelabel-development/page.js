import ShopifyWhitelabelHero from "../components/heroSection/shopifywhitelabel";
import TrustSection from "./sections/trustsection";
import FocusClientSection from "./sections/focusclientsection";
import HowToConnect from "./sections/howtoconnect";
import FaqSection from "./sections/faqsection";
import FeatureSection from "./sections/featuresection";
import MyMarqeee from "./sections/marqee";
import ShopifyWhitelabelServices from "./sections/services";

export default function page() {
  return (
    <>
    <ShopifyWhitelabelHero />
    <FeatureSection />
    <FocusClientSection />
    <ShopifyWhitelabelServices />
    <TrustSection />
    <MyMarqeee />
    <HowToConnect />
    <FaqSection />
    
    </>
  )
}
