import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function Anzhero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] min-[1994px]:!my-5 pb-[70px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] "
      heading={
        <>
          <span className="hero-orange">
            <span className="text-[#333333]">Evolution for a Major </span>Beauty
            Brand in ANZ
          </span>
        </>
      }
      headingClass="max-w-[1042px] mx-auto  text-center mt-[20px]  lg:text-[60px] md:text-[48px] sm:text-[41px] text-[28px] lg:leading-[68px] md:leading-[67px] sm:leading-[48px] leading-[38px]  font-[800]  
            text-2xl  "
      subheading={<>Project Overview</>}
      subheadingClass="mx-auto text-center my-[10px] leading-[36px] sm:text-[24px] text-[20px]  font-[800] text-[#333333] montserrat "
      paragraph={
        <>
          When a top tier beauty brand set out to elevate its digital storefront
          across two countries, Integriti Studio stepped in to lead the
          transformation. We redesigned their Shopify presence for both
          Australia and New Zealand, creating a visually rich, high-performing
          eCommerce experience that aligned perfectly with the brand’s bold
          identity.
        </>
      }
      paragraphClass="lg:max-w-[678px] mx-auto text-center text-[#333333] sm:text-[18px] text-[14px] sm:leading-[32px] leading-[26px] "
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
