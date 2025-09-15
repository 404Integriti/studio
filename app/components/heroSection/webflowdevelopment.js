import Herosection from "@/app/components/heroSection/herosection";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function  WebflowDevelopment() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] text-[]"
      heading={
        <>
          <span className="hero-orange">High-Performance Webflow Development</span>
        </>
      }
      headingClass="lg:max-w-[800px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] lg:text-[50px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]
                    "
      paragraph="At Integriti Studio, we develop Webflow websites that do more than look good—they work hard behind the scenes to scale your brand. From fast-loading pages and dynamic content to clean CMS setups and advanced integrations, our Webflow development delivers impact with precision. Whether you’re a startup or a fast-growing business, we help you build experiences that move, convert, and grow."
      paragraphClass="max-w-[740px] mx-auto text-center mt-[19px] lg:text-[18px] text-[16px] leading-[32px] leading-[28px] "
      buttons={
        <Herobutton 
          btnpadfirst="px-[10px] pt-[10px] pb-[7px] sm:px-[0px] sm:py-[15px] mt-[20px] hero-button-first raleway"
          btnpadsec=" hero-button-sec raleway "
          buttonwidth="220px"
          buttonheight="53px"
          firstButtonText="Let's build Smarter"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  );
} 