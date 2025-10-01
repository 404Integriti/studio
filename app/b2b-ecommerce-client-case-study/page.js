import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";
import ClientStudy from "../components/heroSection/CliendStudy";

export const metadata = {
  title: "B2B eCommerce Client Case Study",
};
export default function page() {
  return (
    <>
      <ClientStudy />
      <Challenges />
      <SkinProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
