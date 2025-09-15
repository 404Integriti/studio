import Herosection from "@/app/components/heroSection/herosection";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function  Wordpressmaintenance() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] text-[]"
      heading={
        <>
         Keep Your <span className="hero-orange">WordPress Site</span> Fast, Safe & Updated
        </>
      }
      headingClass="lg:max-w-[900px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] lg:text-[60px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]
                    "
      paragraph="A high-performing website needs more than just a one-time setup—it needs consistent care. At Integriti Studio, our WordPress maintenance services are built to keep your site secure, fast, and always in peak condition. From handling critical updates to monitoring performance in real time, we keep your digital presence running like a well-oiled machine while you focus on growing your business."
      paragraphClass="max-w-[722px] mx-auto text-center mt-[19px] lg:text-[20px] text-[16px] leading-[32px] leading-[28px] "
      buttons={
        <Herobutton 
          btnpadfirst="px-[10px] py-[15px] lg:text-[20px] text-[14px] mt-[20px] raleway"
          btnpadsec="px-[15px] py-[10px] lg:text-[18px] text-[15px] mt-[20px] raleway"
          buttonwidth="230px"
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