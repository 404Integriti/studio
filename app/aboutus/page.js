"use client";
import Aboutushero from "../components/heroSection/aboutushero";
import Mainvision from "./aboutsections/vision";
import History from "./aboutsections/history";
import Built from "./aboutsections/built";
import Values from "./aboutsections/values";
import Aboutprocess from "./aboutsections/aboutprocess";
import Aboutmarquee from "./aboutsections/aboutmarquee";
import Footercreative from "../components/footercreatice/page";
import Footer from "../components/footer/page";


export default function About() {
  return (
    <>
     
      <Aboutushero />
      <Mainvision />
      <History />
      <Built />
      <Values />
      <Aboutprocess />
      <Aboutmarquee />
    </>
  );
}
