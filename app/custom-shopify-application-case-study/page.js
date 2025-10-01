import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";
import CustomShopifyCaseStudy from "../components/heroSection/customShopifyCaseStudy";

export const metadata = {
  title: "Custom Shopify Application Case Study",
};
export default function page() {
  return (
    <>
      <CustomShopifyCaseStudy />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
