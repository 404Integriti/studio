'use client';
import Wordpressdesign from "../../app/components/heroSection/wordpressdesignhero"
import WordPressprinciples from "./sections/principles"
import Customthemedesign from "./sections/customthemedesign";
import PluginIntegration from "./sections/designmatters"
import Themedesign from "./sections/themedesign"
import Approch from "./sections/approch"
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
