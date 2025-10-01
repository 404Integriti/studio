import WordpressWhitelabelHero from "../components/heroSection/wordpresswhitelabel";
import FaqSection from "./sections/faqsection";
import FocusOnClient from "./sections/focusOnClient";
import HowToConnect from "./sections/howToConnect";
import WordpressWhitelabelServices from "./sections/services";
import TrustSection from "./sections/trustsection";
import WhyWorkSection from "./sections/whyworksection";

export const metadata = {
  title: "Wordpress Whitelabel Development ",
};

export default function page() {
  return (
    <>
      <WordpressWhitelabelHero />
      <WhyWorkSection />
      <FocusOnClient />
      <WordpressWhitelabelServices />
      <TrustSection />
      <HowToConnect />
      <FaqSection />
    </>
  );
}
