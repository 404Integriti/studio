import Secheading from "../secheading";
import Image from "next/image";

export default function Footercreative() {
  return (
    <section className="footer-creative md:pt-[100px] sm:pt-[60px] pt-[20px] pb-[60px] bg-[#f8f8f8]">
      <div className="w-full max-w-[1440px] mx-auto lg:px-[0px] px-[20px]">
        <div className="w-full bg-change max-w-[910px] mx-auto bg-[#009688] rounded-[30px] flex flex-col md:flex-row justify-between items-center md:pb-[25px] pb-[0px]">

          <div className="w-full md:max-w-[450px] max-w-[100%] md:mt-[40px] mt-[20px] mb-[10px] md:pl-[50px] pl-[20px] md:pr-[0px] pr-[40px]">
            <Secheading
              heading="Powered by Creativity, Fueled by Caffeine."
              classheading="text-[#fff3e0] w-[100%] md:max-w-[100%] max-w-[300px] lg:text-[50px] md:text-[37px] sm:text-[28px] text-[31px] font-[400] lg:leading-[57px] md:leading-[47px] sm:leading-[31px] leading-[33px] text-left mb-[10px] creative-head"
              buttontext="Get Started"
              buttonclass="bg-[#ff5722] w-[180px] pt-[12px] pb-[12px] text-center inline-block creativebtn rounded-[30px] text-[#fff] text-[18px] leading-[22px] hover:bg-[#ed8104]"
            />
          </div>

          <div className="w-full max-w-[382px] flex md:justify-start justify-center mt-[20px] md:mt-0" style={{
            backgroundImage: 'url(/footerbg.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-4px 49px',
          }}>
           <Image
              src="/footerlaptop.png"
              alt="footer laptop"
              width={263}
              height={238}
              className="footer-float"
            />
          </div>

        </div>
      </div>

   
    </section>
  );
}
