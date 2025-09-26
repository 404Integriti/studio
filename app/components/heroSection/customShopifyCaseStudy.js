import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function CustomShopifyCaseStudy() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] min-[1994px]:!my-5 pb-[70px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] "
      heading={
        <>
          <span className="hero-orange">
            Custom Shopify
            <span className="text-[#333333]">
              {" "}
              Application For Custom Shipping Prices
            </span>
          </span>
        </>
      }
      headingClass="max-w-[900px] mx-auto  text-center mt-[20px]  lg:text-[50px] md:text-[48px] sm:text-[41px] text-[26px] lg:leading-[68px] md:leading-[67px] sm:leading-[48px] leading-[38px]  font-[800]  
            text-2xl  "
      subheading={<>Project Overview</>}
      subheadingClass="mx-auto  text-center my-[10px] leading-[36px] sm:text-[24px] text-[20px] mt-[40px]  font-[800] text-[#333333] montserrat "
      paragraph={
        <>
          An eCommerce business with multiple physical stores in the USA needed
          a custom Shopify app to handle their shipping and in-store pickup
          efficiently. Their goal was to allow customers to select their
          preferred store at checkout while automatically adjusting shipping
          costs based on location. Since they were on the Shopify Basic plan,
          they required a tailored solution without upgrading to Shopify Plus.
        </>
      }
      paragraphClass="max-w-[678px] mx-auto text-center text-[#333333] sm:text-[18px] text-[14px] sm:leading-[32px] leading-[26px] "
      buttons={
        <Herobutton
          btnpadfirst="hero-btn-dental raleway !font-[400]"
          btnpadsec="hero-btn-dental raleway "
          buttonwidth="200px"
          buttonheight="53px"
          firstButtonText="Get started"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  );
}
