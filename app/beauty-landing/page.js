
import VideoSection from "../videosection";
import BeautyLandingHero from "../components/heroSection/beautylandinghero";
import BrandSection from "./sections/BrandsSection"
import Casestudy from "./sections/casestudy"; 
import BeautyPricing from "./sections/beautyprice";
import SectionUpdate from "./sections/sectionupdate";
import UserExperience from "./sections/userexperience";
const page = () => {
  return (
    <div>
      <VideoSection />
      <BeautyLandingHero />
      <BrandSection />
      <Casestudy />
      <BeautyPricing />
      <SectionUpdate />
      <UserExperience/>
    </div>
  )
}

export default page;
