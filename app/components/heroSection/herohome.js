import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";
import Playimage from "../herobuttons/playimage"; 

export default function Herohome() {
  return (
    <Herosection
      // ✅ Section padding (mobile-first → up to 2xl)
      sectionpadding="
        pt-[40px] pb-[30px] py-[20px] mt-[-20px]    // base (mobile)
        sm:pt-[50px] sm:pb-[30px] sm:mt-[-35px]     // ≥640px
        md:pt-[65px] md:pb-[30px] md:mt-[-40px]     // ≥768px
        lg:pt-[65px] lg:pb-[30px] md:mt-[-40px]     // ≥1024px
        xl:pt-[100px] xl:pb-[30px] xl:mt-[-65px]    // ≥1280px
        2xl:pt-[100px] 2xl:pb-[30px] 2xl:mt-[-65px] // ≥1536px
      "
      
      // ✅ Heading text responsive scaling
      heading={
        <>
          Expert <span className="hero-orange">Developers.</span>{" "}
          Extensive <span className="hero-orange">Experience.</span>
        </>
      }
      headingClass="
        mx-auto text-center font-[800] mt-[10px]
        text-[26px] leading-[32px] max-w-[400px]         // base mobile
        sm:text-[36px] sm:leading-[42px] sm:max-w-[500px] // ≥640px
        md:text-[44px] md:leading-[50px] md:max-w-[600px] // ≥768px
        lg:text-[52px] lg:leading-[60px] lg:max-w-[700px] // ≥1024px
        xl:text-[56px] xl:leading-[64px] xl:max-w-[800px] // ≥1280px
        2xl:text-[60px] 2xl:leading-[68px] 2xl:max-w-[928px] // ≥1536px
      "

      // ✅ Paragraph text
      paragraph="We create high-conversion websites"
      paragraphClass="
        max-w-[525px] mx-auto text-center mt-[19px] 
        text-[16px] leading-[28px]     // base
        sm:text-[17px] sm:leading-[30px]
        md:text-[18px] md:leading-[32px]
      "

      // ✅ Buttons setup
      buttons={
        <Herobutton
          btnpadfirst="
            px-[14px] lg:py-[14px] py-[10px] text-[16px]   // base
            md:px-[18px] md:py-[16px] 
            2xl:px-[11px] 2xl:py-[19px] 2xl:text-[21px]
          "
          btnpadsec="
            px-[16px] py-[12px] text-[16px]   // base
            sm:text-[18px] sm:px-[18px] sm:py-[14px]
            2xl:px-[20px] 2xl:py-[15px] 2xl:text-[18px]
          "
          buttonwidth="200px"
          buttonheight="53px"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
          firstButtonText="Start Demo"
          playIcon={<Playimage />}
          secondButtonText="Learn More"
        />
      }
    />
  );
}
