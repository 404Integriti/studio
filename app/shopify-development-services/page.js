import Shopifydevelopmenthero from "../components/heroSection/shopifydevelopmenthero";
import Maintenance from "./sections/maintenance";
import ScrollFeatures from "./sections/scrollFeature";
import ShopifyServices from "./sections/services";
import TextMarquee from "./sections/TextMarquee";
import ShopifySolutions from "./sections/shopifySolutions";

export const metadata = {
  title: "Shopify Development Services",
};
export default function page() {
  return (
    <>
      <Shopifydevelopmenthero />
      <ShopifySolutions />
      <ShopifyServices />
      <TextMarquee />
      <ScrollFeatures />
      <Maintenance />
    </>
  );
}
