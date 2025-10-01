import SkinCareClinic from "../components/heroSection/skincareclinic";
import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import TokyoSection from "../components/heroSection/tokoyoSection";
import SkinProcess from "./sections/SkinProcess";

export const metadata = {
  title: "Tokyo Blanks Case Study",
};

export default function page() {
  return (
    <>
      <TokyoSection />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
