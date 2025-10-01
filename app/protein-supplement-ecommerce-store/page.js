import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";
import EcommerceStoreSection from "../components/heroSection/ecommercestore";

export const metadata = {
  title: "Protein Supplement Ecommerce Store",
};
export default function page() {
  return (
    <>
      <EcommerceStoreSection />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
