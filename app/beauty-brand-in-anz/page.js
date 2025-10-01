import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";
import Anzhero from "../components/heroSection/anzhero";

export const metadata = {
  title: "Beauty Brand in ANZ ",
};
export default function page() {
  return (
    <>
      <Anzhero />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
