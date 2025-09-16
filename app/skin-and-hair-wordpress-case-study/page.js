'use client';
import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";
import SkinSection from "../components/heroSection/skinsection";


export default function page() {
  return (
    <>
    <SkinSection/>
    <Challenges/>
    <SkinProcess/>
    <ProductOffering/>
    <Impact/>
    <CaseStudy/>

    </>
  )
}
