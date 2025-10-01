import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";

import Pharmaceutical from "../components/heroSection/pharmacycasestudy";

export const metadata = {
  title: "Nett Pharmacy Case Study",
};

export default function page() {
  return (
    <>
      <Pharmaceutical />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
