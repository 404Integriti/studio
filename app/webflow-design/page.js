import HeroSection from "../components/heroSection/webflowdesign";
import WhyDesignMatter from "./sections/WhyDesignMatter";
import WhyDesignDiffer from "./sections/WhyDesignDiffer";
import MobileResponsive from "./sections/MobileResponsive";
import ThemeDesign from "./sections/ThemeDesign";

export const metadata = {
  title: "Webflow Design",
};

export default function WebflowSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyDesignDiffer />
      <ThemeDesign />
      <WhyDesignMatter />
      <MobileResponsive />
    </div>
  );
}
