import Shopifydesignhero from "../components/heroSection/shopifydesignhero";
import Shopifyapproch from "../shopify-design/sections/shopifyapproch";
import TextMarquee from "../shopify-development/sections/textmarquee";
import Customdesign from "../shopify-design/sections/customdesign";
import OptimizedDevice from "../shopify-design/sections/optimizeddevice";

export const metadata = {
  title: "Shopify Design",
};
export default function Shopifydesign() {
  return (
    <>
      <Shopifydesignhero />
      <Shopifyapproch />
      <TextMarquee />
      <Customdesign />
      <OptimizedDevice />
    </>
  );
}
