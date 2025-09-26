import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";
import Link from "next/link";

export default function Wordpressdevelopmenthero() {
  return (
    <section>
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
    />
    <div className="flex justify-center mb-[40px] mt-[-20px] sm-[mt-[0px]] lg:mt-[-80px]">
      <Link href='/wordpress-whitelabel-development' className=" raleway text-[14px] sm:!text-[18px]  md:!w-[285px]   !w-[250px] sm:[w-300px] h-[50px] rounded-[73.62px] ${btnpadsec} flex justify-center items-center font-[500]  bg-[#FCE4EC] hover:bg-[#ffbed4] transition-all duration-500 text-[#D81B60]  py-2">Explore White Label Service</Link>
    </div>
    </section>
    
  );
}
