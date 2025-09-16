import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function TokyoSection() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] min-[1994px]:!my-5 pb-[70px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] "
      heading={
        <>
          <span className="hero-orange">Tokyo Blanks</span>
        </>
      }
      headingClass="lg:max-w-[900px] md:max-w-[740px] mx-auto text-center mt-[20px] lg:leading-[68px] md:text-[60px] text-[41px] text-[28px] md:leading-[55px] leading-[40px] font-[800]  
            text-2xl    "
        subheading={<>Project Overview</>}
        subheadingClass="lg:max-w-[930px] md:max-w-[740px] mx-auto text-center my-[10px] mt-[19px] lg:leading-[36px] mb-[10px] lg:text-[24px]  text-[20px]  font-[800] text-[#333333] montserrat "
      paragraph={<>Integriti Studio transformed a streetwear brand’s online store by developing a custom Shopify solution tailored to their aesthetic and business needs. This project involved comprehensive branding, logo redesign, and a user-friendly website layout. The result was a modernized digital presence that enhanced both B2B and B2C operations.
 </>}
      paragraphClass="max-w-[678px] mx-auto text-center text-[#333333] md:text-[18px] text-[14px] leading-[32px] leading-[28px] "
      buttons={
        <Herobutton 
          btnpadfirst="hero-btn-dental raleway !font-[400]"
          btnpadsec="hero-btn-dental raleway "
          buttonwidth="220px"
          buttonheight="48px"
          firstButtonText="Get started"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="#meetourteam"
        />
      }
    />
  );
} 