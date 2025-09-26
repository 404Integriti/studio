import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function Portfoliohero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] pb-[60px] lg:pt-[100px] md:pt-[60px] pt-[40px]"
      heading={
        <>
         Our <span className="hero-orange">Portfolio</span> is a Proof That We <span className="hero-orange">Always Deliver</span>
        </>
      }
      headingClass="lg:max-w-[930px] md:max-w-[700px] max-w-[500px] mx-auto text-center mt-[20px] mb-[20px] font-[800] lg:leading-[68px] md:leading-[50px] leading-[40px] lg:text-[50px] sm:px-[15px] px-[15px]
                    md:text-[36px] text-[24px]"
      paragraph="We believe that a strong online presence is more than just a website. It is in fact a powerful tool for
connecting with your target audience. A well-built website also helps in building brand loyalty which is
essential in today’s world where competition is quite strong. Team Integriti specializes in crafting stunning
websites and e-commerce stores on the platforms of WordPress and Shopify."
      paragraphClass="max-w-[935px] mx-auto sans text-center sm:px-[15px] px-[15px] lg:text-[19px] md:text-[16px] lg:leading-[32px] leading-[30px] text-[#333]"
      buttons={
        <Herobutton 
          btnpadfirst="px-[10px] py-[15px] raleway font-[400] lg:text-[20px] text-[18px]"
          btnpadsec="hidden"
          buttonwidth="200px"
          buttonheight="50px"
          firstButtonText="Say Hi !"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  );
} 