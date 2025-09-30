import Herosection from "@/app/components/heroSection/herosection";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function Wbshero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[150px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px]"
      heading={
        <>
          <span className="hero-orange">Your Website, Built to Perform, Designed to Grow</span>
        </>
      }
      headingClass="lg:max-w-[930px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] lg:text-[50px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]
                    "
      paragraph="At Integriti Studio, we don’t just build websites—we build growth engines. Whether you’re launching your first store or scaling your business globally, we bring strategy, design and code together to create websites that don’t just look good—they perform. Shopify. WordPress. Webflow. Whatever your platform, we make sure your site works harder, loads faster and sells better."
      paragraphClass="max-w-[740px] mx-auto text-center mt-[19px] lg:text-[19px] text-[16px] leading-[32px] leading-[28px]"
      buttons={
        <Herobutton 
          btnpadfirst="px-[10px] py-[15px] lg:text-[20px] text-[14px] mt-[20px] raleway"
          btnpadsec="px-[15px] py-[10px] lg:text-[18px] text-[15px] mt-[20px] raleway"
          buttonwidth="200px"
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