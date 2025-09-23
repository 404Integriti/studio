import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function SkinSection() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] min-[1994px]:!my-5 pb-[70px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] "
      heading={
        <>
          <span className="hero-orange">Dermatology <span className="text-[#333333]">Clinic Shopify Store & Dermatology Clinic</span> Wordpress Website</span>
        </>
      }
      headingClass="max-w-[946px] mx-auto  text-center mt-[20px]  lg:text-[50px] md:text-[48px] sm:text-[41px] text-[28px] lg:leading-[68px] md:leading-[67px] sm:leading-[48px] leading-[38px]  font-[800]  
            text-2xl    "
        subheading={<>Project Overview</>}
        subheadingClass="mx-auto text-center my-[10px] sm:text-[24px] text-[20px]  font-[800] text-[#333333] montserrat "
      paragraph={<>A leading cosmetology clinic wanted to establish a strong online presence with a well-structured WordPress website. Their goal was to showcase their expertise in skin and hair care while simplifying the appointment booking process <br></br>
We worked closely with the client to organize their content and refine their service offerings. The website was built from scratch using Elementor page builder and the Hello Elementor theme for fast loading. With a user-friendly UI/UX, compressed WebP images, and seamless navigation, we ensured a smooth browsing experience for visitors. </>}
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
          secondButtonlink="#meetourteam"
        />
      }
    />
  );
} 