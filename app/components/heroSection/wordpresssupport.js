import Herosection from "@/app/components/heroSection/herosection";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function  Wordpresssupporthero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[30px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] text-[]"
      heading={
        <>
        Ongoing <span className="hero-orange">WordPress Support</span> That Keeps You Moving
        </>
      }
      headingClass="lg:max-w-[900px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] lg:text-[60px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]
                    "
      paragraph="Moving
A fast, secure and reliable website isn’t a one-time project—it’s an ongoing commitment. At Integriti Studio, we provide continuous WordPress support that ensures your site performs at its best every day. From critical plugin updates to security patches and real-time monitoring, we’re your trusted partner behind the scenes. We keep things smooth so you can stay focused on what matters: growing your business."
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