import BitsABabyHero from "../components/heroSection/bitsababy";
import CaseStudy from "./sections/CaseStudies";
import Challenges from "./sections/Challenges";
import BitsProcess from "./sections/BitsProcess";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";


export default function page() {
  return (
    <>
    <BitsABabyHero/>
        <Challenges/>
        <BitsProcess/>
        <ProductOffering/>
        <Impact/>
        <CaseStudy/>
    </>
  )
}
