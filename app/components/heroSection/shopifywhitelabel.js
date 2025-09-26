import Herosection from "@/app/components/heroSection/herosection";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function ShopifyWhitelabelHero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] !px-[15px] !py-[0px] sm:!pt-[40px] md:!pt-[60px] !pb-[40px] md:!pb-[70px]"
      heading={
        <span className="hero-orange">
         Shopify <span className="text-[#333333]">White Label</span> <br/> Development
        </span>
      }
      headingClass="lg:max-w-[900px] md:max-w-[740px] mx-auto text-center !my-[20px] !leading-[39px] sm:!leading-[56px] md:!leading-[68px] text-[28px] sm:!text-[42px] md:!text-[50px] font-[800]
                    "
      paragraph="Need Shopify experts you can trust behind the scenes? We’re your silent partner. At Integriti Studio, we work as your invisible Shopify development team, giving you all the credit while we build, maintain, and scale world-class eCommerce stores for your clients. You focus on relationships—we focus on delivery."
      paragraphClass="max-w-[722px] mx-auto text-center mt-[19px] text-[#333] text-[16px] sm:text-[20px] leading-[26px] lg:leading-[32px] !px-[15px] sm:!px-[0px] !w-full !max-w-[395.333px] sm:!max-w-[698px] md:!max-w-[910px] lg:!max-w-[902.396px]"
      buttons={
        <Herobutton 
          btnpadfirst="!pl-[5px] !pr-[10px] !mt-[10px]  !py-[10px] sm:!px-[10px] sm:!py-[15px] sm:!mt-[20px] raleway !leading-[22px] !w-[180px] sm:!w-[230px] !max-w-[230px] !h-[42px] sm:!h-[52px] !text-[15px] !font-[400] sm:!text-[18px]"
          buttonwidth="200px"
          buttonheight="50px"
          firstButtonText="Start Your Partnership"
          firstButtonlink="/contact-us"
          btnpadsec="hidden"
          secondButtonText=""
          secondButtonlink=""
        />
      }
    />
  );
} 
