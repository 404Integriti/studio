import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function PlushieCaseHero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] min-[1994px]:!my-5  pb-[70px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] "
      heading={
        <>
          <span className="hero-orange">Plushie Toy <span className="text-[#333333]">Store</span></span>
        </>
      }
      headingClass="lg:max-w-[930px] md:max-w-[740px] mx-auto text-center mt-[20px] lg:leading-[68px] lg:text-[50px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]  
            text-2xl    "
        subheading={<>Project Overview</>}
        subheadingClass="lg:max-w-[930px]  md:max-w-[740px] mx-auto text-center my-[10px] lg:text-[24px]  text-[20px]  font-[800] text-[#333333] montserrat "
      paragraph={<>
      
     A plushie toy store needed a Shopify store built from scratch within a week. The goal was to create a professional, user-friendly platform capable of handling global transactions, managing promotions, and providing a seamless shopping experience for customers worldwide.</>}
      paragraphClass="max-w-[720px] mx-auto text-center text-[#333333] lg:text-[18px] text-[15px] leading-[32px] leading-[28px] px-2"
      buttons={
        <Herobutton 
          btnpadfirst="hero-btn-dental raleway "
          btnpadsec="hero-btn-dental raleway "
          buttonwidth="200px"
          buttonheight="53px"
          firstButtonText="Get started"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="#meetourteam"
        />
      }
    />
  );
}