import Wordpressdesign from "../../app/components/heroSection/wordpressdesignhero";
import WordPressprinciples from "./sections/principles";
import Customthemedesign from "./sections/customthemedesign";
import PluginIntegration from "./sections/designmatters";
import Themedesign from "./sections/themedesign";
import Approch from "./sections/approch";

export const metadata = {
  title: "Wordpress Design",
};

export default function Page() {
  return (
    <>
      <Wordpressdesign />
      <PluginIntegration />
      <Approch />
      <Themedesign />
      <WordPressprinciples />
      <Customthemedesign />
    </>
  );
}
