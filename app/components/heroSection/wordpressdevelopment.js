import Herosection from "@/app/components/heroSection/herosection";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function  WordpressDevelopment() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] text-[]"
      heading={
        <>
          <span className="hero-orange">WordPress Development That Scales With You</span>
        </>
      }
      headingClass="lg:max-w-[800px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] lg:text-[50px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]
                    "
      paragraph="Your website isn’t just a digital presence—it’s a growth engine. At Integriti Studio, we build high performance WordPress websites that go beyond good design. Whether you are launching a new brand or upgrading an outdated site. We create custom solutions that load faster, rank higher and convert better. Our builds are lean, clean and always aligned with your business goals. We don’t believe in shortcuts. Just smart and scalable development that delivers real results. "
      paragraphClass="max-w-[740px] mx-auto text-center mt-[19px] lg:text-[18px] text-[16px] leading-[32px] leading-[28px] "
      buttons={
        <Herobutton 
          btnpadfirst="px-[10px] py-[15px] lg:text-[20px] text-[14px] mt-[20px] raleway"
          btnpadsec="px-[15px] py-[10px] lg:text-[18px] text-[15px] mt-[20px] raleway"
          buttonwidth="230px"
          buttonheight="53px"
          firstButtonText="Let's Build"
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  );
} 