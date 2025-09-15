import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function BitsABabyHero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] min-[1994px]:!my-5 pb-[70px] lg:pt-[90px] md:pt-[50px] lg:px-[0px] px-[15px] "
      heading={
        <>
          <span className="hero-orange">Bitsababy</span>
        </>
      }
      headingClass="lg:max-w-[930px] md:max-w-[740px] mx-auto text-center mt-[20px] lg:leading-[88px] lg:text-[60px] md:text-[48px] text-[32px] md:leading-[65px] leading-[40px] font-[800]  
            text-2xl    "
        subheading={<>Project Overview</>}
        subheadingClass="lg:max-w-[930px] md:max-w-[740px] mx-auto text-center my-[10px] lg:text-[24px]  text-[20px]  font-[800] text-[#333333] montserrat "
      paragraph={<>Integriti Studio partnered with a lifestyle eCommerce brand to highly enhance its online presence and drive real growth. By developing a visually appealing and user-friendly Shopify store, we helped the brand better showcase its versatile product catalog and improve customer
      <br />engagement. </>}
      paragraphClass="max-w-[710px] mx-auto text-center text-[#333333] lg:text-[18px] text-[15px] leading-[32px] leading-[28px] "
      btnContainer={" mt-[-10px]"}
      buttons={
        <Herobutton 
          btnpadfirst="hero-btn-dental  !font-[500] !raleway !w-[220px] !text-[20px] !py-[0px]"
          btnpadsec="hero-btn-dental  "
          buttonwidth="200px"
          buttonheight="47px"
          firstButtonText="Get started"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="#meetourteam"
          // fontfamily={"raleway"}
          
        />
      }
    />
  );
} 