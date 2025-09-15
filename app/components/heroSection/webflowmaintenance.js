import Herosection from "@/app/components/heroSection/herosection";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function WebflowMaintenance() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] text-[]"
      heading={
        <span className="text-[#333333]">
         Keep Your <span className="hero-orange">Webflow Site  </span> Optimized, Secure & Fresh
        </span>
      }
      headingClass="lg:max-w-[900px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] text-[26px] sm:text-[41px] md:text-[48px] lg:text-[60px]  md:leading-[55px] leading-[40px] font-[800]
                    "
      paragraph="Your website should evolve as your business does. At Integriti Studio, our Webflow maintenance services ensure that your site stays lightning-fast, visually sharp, and technically flawless long after launch. We don’t just fix problems—we prevent them. From regular CMS cleanup to SEO fine-tuning and performance monitoring, we keep your site in top shape while you focus on scaling. "
      paragraphClass="max-w-[722px] mx-auto text-center mt-[19px] text-[#333] text-[16px] sm:text-[20px] leading-[26px] lg:leading-[32px] "
      buttons={
        <Herobutton 
          btnpadfirst="px-[10px] py-[15px] lg:text-[20px] text-[14px] mt-[20px] web-main-herobtn-first raleway"
          btnpadsec="px-[1px] py-[10px] lg:text-[18px] text-[15px] mt-[20px] web-main-herobtn-sec raleway"
          buttonwidth="200px"
          buttonheight="50px"
          firstButtonText="Get started"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  );
} 
