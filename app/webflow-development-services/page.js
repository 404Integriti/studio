import Maintenance from "./sections/maintenance";
import ScrollFeatures from "./sections/scrollFeature";
import WebflowServices from "./sections/services";
import TextMarquee from "./sections/TextMarquee";
import Webflowdevelopmenthero from "../components/heroSection/webflowdevelopmenthero";
import WebflowSolutions from "./sections/webflowSolutions";

export const metadata = {
  title: "Webflow Development Services",
};

export default function page() {
  return (
    <>
      <Webflowdevelopmenthero />
      <WebflowSolutions />
      <WebflowServices />
      <TextMarquee />
      <ScrollFeatures />
      <Maintenance />
    </>
  );
}
