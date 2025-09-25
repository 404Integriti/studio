import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function Wordpressdevelopmenthero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] min-[1994px]:!my-5  pb-[70px]  md:pt-[50px] lg:px-[0px] px-[15px] "
      heading={
        <>
          <span className="hero-orange ">
            WordPress Development That Works for You
          </span>
        </>
      }
      headingClass="lg:max-w-[930px] md:max-w-[740px] mx-auto text-center my-[20px] lg:leading-[68px] lg:text-[50px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]  
            text-2xl    "
      paragraph={
        <>
          At Integriti Studio, we design and build custom WordPress websites
          that are fast, scalable and user friendly. Whether you are an agency
          looking for white label support, a business ready to scale or a brand
          that needs a powerful online presence. We’ve got you covered. With
          WordPress as our core CMS, we deliver flexible solutions that grow
          with you.
        </>
      }
      paragraphClass="max-w-[740px] mx-auto text-center text-[#333333] lg:text-[18px] text-[15px] leading-[32px] leading-[28px] "
      buttons={
        <Herobutton
          btnpadfirst="hero-btn-dental raleway "
          btnpadsec="hero-btn-dental raleway "
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
