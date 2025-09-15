"use client";


import PlushieCaseHero from "../components/heroSection/plushieCase";
import CaseStudy from "./sections/CaseStudies";
import Challenges from "./sections/Challenges";
import PlushieProcess from "./sections/PlushieProcess";
import ProductOffering from "./sections/ProductOffering";
import Impact from "./sections/TheImpact";

export default function page() {
  return (
    <>
     
    <PlushieCaseHero/>
      <Challenges />
      <PlushieProcess />
      <ProductOffering />
      <Impact />
      <CaseStudy />
    </>
  );
}
