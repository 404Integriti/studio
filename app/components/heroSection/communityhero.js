import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function Communityhero() {
  return (
    <Herosection
      sectionpadding="lg:pt-[120px] md:pt-[60px] pt-[40px] lg:pb-[60px] pb-[40px] "
      heading={
        <>
         Together for Every <span className="hero-orange">Child{"'"}s Tomorrow</span>
        </>
      }
      headingClass=" w-[100%] max-w-[935px] mx-auto text-center mt-[20px] mb-[20px] font-[800] lg:leading-[68px] md:leading-[48px] leading-[40px] lg:text-[60px] md:text-[36px] text-[24px]"
      paragraph="Integriti Studio Community—a space built for collaboration, learning and mutual growth. This is where creatives, developers, marketers and entrepreneurs come together to exchange ideas, share resources and support each other. From expert insights and peer feedback to project inspiration and exclusive events. Our community is designed to keep you connected and moving forward."
      paragraphClass="max-w-[960px] mx-auto sans text-center lg:text-[20px] text-[18px] lg:leading-[32px] leading-[30px] text-[#333] lg:px-[0px]  px-[15px]"
      buttons={
        <Herobutton 
          btnpadfirst="px-[10px] py-[15px] raleway font-[400] lg:text-[20px] text-[18px] text-[#fce4ec]"
          btnpadsec="px-[15px] py-[10px] raleway text-[18px]"
          buttonwidth="200px"
          buttonheight="50px"
          firstButtonText="Get Started"
          secondButtonText="learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  );
} 