import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function Aboutushero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[400px] md:pb-[300px] pb-[300px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px]"
      heading={
        <>
          <span className="hero-orange">
            We Design, Build and Optimize for Your Business Goals
          </span>
        </>
      }
      headingClass="lg:max-w-[930px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] lg:text-[50px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]
                    "
      paragraph="Our goal is to simplify your digital experience. We aim to provide solutions that help your company achieve tangible outcomes, whether that means creating an attractive website, creating a unique e-commerce platform, or increasing your online presence."
      paragraphClass="max-w-[740px] mx-auto text-center mt-[19px] lg:text-[18px] text-[16px] leading-[32px] leading-[28px]"
      buttons={
        <Herobutton
          btnpadfirst="px-[10px] py-[15px] lg:text-[20px] text-[14px] mt-[20px] raleway"
          btnpadsec="px-[15px] py-[10px] lg:text-[18px] text-[15px] mt-[20px] raleway"
          buttonwidth="230px"
          buttonheight="53px"
          firstButtonText="Say Hi"
          secondButtonText="Meet Our Team"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  );
}
