import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function Dentalcasehero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] min-[1994px]:!my-5  pb-[70px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] "
      heading={
        <>
          <span className="hero-orange ">Dental <span className="text-[#333333]">Products</span></span>
        </>
      }
      headingClass="lg:max-w-[930px] md:max-w-[740px] mx-auto text-center mt-[20px] lg:leading-[68px] lg:text-[50px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]  
            text-2xl    "
        subheading={<>Project Overview</>}
        subheadingClass="lg:max-w-[930px]  md:max-w-[740px] mx-auto text-center my-[10px] lg:text-[24px]  text-[20px]  font-[800] text-[#333333] montserrat "
      paragraph={<>
      
      Zendora Dental, an eCommerce business, needed a custom Shopify solution to apply location-based discounts at checkout while maintaining real-time pricing from their ERP system. They wanted to streamline the checkout process and automate discount applications without upgrading to Shopify Plus
      <br/> <br />
      Our team developed a tailored Shopify integration that enabled automatic discounting based on customer location and ensured real-time price synchronization with their ERP system.</>}
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