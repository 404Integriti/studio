import Wordpressdevelopmenthero from "../components/heroSection/wordpressdevelopmenthero";
import Maintenance from "./sections/maintenance";
import ScrollFeatures from "./sections/scrollFeature";
import WordpressServices from "./sections/services";
import TextMarquee from "./sections/TextMarquee";
import WordpressSolutions from "./sections/wordpressSolution";

export const metadata = {
  title: "Wordpress Development Services",
};

export default function page() {
  return (
    <>
      <Wordpressdevelopmenthero />
      <WordpressSolutions />
      <WordpressServices />
      <TextMarquee />
      <ScrollFeatures />
      <Maintenance />
    </>
  );
}
