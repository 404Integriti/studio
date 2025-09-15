import Herosection from "./herosection"
import Herobutton from "../herobuttons/herobutton"
export default function BeautyLandingHero() {
  return (
  <Herosection
      sectionpadding="lg:py-[100px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] text-[]"
      heading={
        <>
        Your <span className="hero-orange">Skin & Hair</span> Brand, Elevated Online
        </>
      }
      headingClass="lg:max-w-[900px] md:max-w-[740px] mx-auto text-center mt-[10px] lg:leading-[68px] lg:text-[60px] md:text-[48px] sm:text-[41px] sm:leading-[48px] text-[26px] md:leading-[55px] leading-[32px] font-[800]
                    "
      paragraph="Your skincare or haircare brand deserves a digital presence that’s just as polished. We create beautiful, high performing websites that capture attention, build trust and drive sales."
      paragraphClass="max-w-[722px] text-[#333]  mx-auto text-center mt-[10px] md:text-[20px]  text-[15px] lg:leading-[32px] leading-[26px]" 
      buttons={
        <Herobutton 
          btnpadfirst="lg:text-[14px] text-[12px]  mt-[10px] font-[400] leading-[22px] raleway customButton"
          btnpadsec="px-[15px] py-[10px] lg:text-[18px] text-[15px] mt-[20px] raleway hidden"
          buttonwidth="200px"
          buttonheight="53px"
          firstButtonText="Let's Glow Online"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  )
}
