import Dentalcasehero from "../components/heroSection/dentalcasehero";
import CaseStudy from "./sections/CaseStudies";
import Challenges from "./sections/Challenges";
import DentalProcess from "./sections/DentalProcess";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";

export const metadata = {
  title: "Zendura Dental Case Study",
};

export default function page() {
  return (
    <>
      <Dentalcasehero />
      <Challenges />
      <DentalProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
