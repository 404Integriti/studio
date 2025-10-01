import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";
import Casestudy from "../components/heroSection/casestudy";
// import Casestudy from "../components/heroSection/casestudy";

export const metadata = {
  title: "Mero Case Study",
};
export default function page() {
  return (
    <>
      <Casestudy />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
