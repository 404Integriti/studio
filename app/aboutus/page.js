import Aboutushero from "../components/heroSection/aboutushero";
import Mainvision from "./aboutsections/vision";
import History from "./aboutsections/history";
import Built from "./aboutsections/built";
import Values from "./aboutsections/values";
import Aboutprocess from "./aboutsections/aboutprocess";
import Aboutmarquee from "./aboutsections/aboutmarquee";

export const metadata = {
  title: "About us ",
};

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
