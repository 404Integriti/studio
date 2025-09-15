"use client";


import Dentalcasehero from "../components/heroSection/dentalcasehero";
import CaseStudy from "./sections/CaseStudies";
import Challenges from "./sections/Challenges";
import DentalProcess from "./sections/DentalProcess";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";

export default function page() {
  return (
    <>
     
    <Dentalcasehero/>
      <Challenges />
      <DentalProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
