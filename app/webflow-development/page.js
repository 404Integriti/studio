import Services from "./sections/Services";
import CMSContent from "./sections/CMSContent";
import CustomCode from "./sections/CustomCode";
import WhyWebflow from "./sections/WhyWebflow";
import WebflowDevelopment from "../components/heroSection/webflowdevelopment";

export const metadata = {
  title: "Webflow Development",
};

export default function Page() {
  return (
    <main className="flex flex-col">
      <WebflowDevelopment />
      <WhyWebflow />
      <Services />
      <CMSContent />
      <CustomCode />
    </main>
  );
}
