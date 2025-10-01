import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";
import FarmetteHero from "../components/heroSection/farmettehero";

export const metadata = {
  title: "Farmette Case Study",
};
export default function page() {
  return (
    <>
      <FarmetteHero />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
