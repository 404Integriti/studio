import SkinCareClinic from "../components/heroSection/skincareclinic";
import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";

export const metadata = {
  title: "Skin And Hair Shopify Case Study",
};

export default function page() {
  return (
    <>
      <SkinCareClinic />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
