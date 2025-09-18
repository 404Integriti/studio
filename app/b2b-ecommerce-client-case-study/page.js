'use client';
import CaseStudy from "./sections/Portfolio";
import Challenges from "./sections/Challenges";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";
import SkinProcess from "./sections/SkinProcess";
import ClientStudy from "../components/heroSection/CliendStudy";

export default function page() {
  return (
    <>
    <ClientStudy/>
    <Challenges/>
    <SkinProcess/>
    <ProductOffering/>
    <Impact/>
    <CaseStudy/>

    </>
  )
}
