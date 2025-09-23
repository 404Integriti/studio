import Image from "next/image";
import Link from "next/link";

export default function Dijital({ laptopimg, heading, paragraphtext, buttonlink, buttontext }) {
  return (
<div className=" w-[100%] max-w-[100%] px-[20px]">
<div className="digital_container w-full max-w-[1320px] bg-[#009688] xl:mx-auto flex md:flex-row justify-center lg:min-h-[300px] md:min-h-[260px] sm:min-h-[245px] min-h-[250px]">

      {/* LEFT - IMAGE */}
      <div className="dijital_left w-full xl:max-w-[400px] lg:max-w-[300px] max-w-[300px] ml-[20px] lg:ml-[40px] hidden md:block">
        <Image
          src={laptopimg}
          alt="Laptop"
          width={310}
          height={194}
          className=" h-auto max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mt-[20px] lg:mt-[30px] "
        />
      </div>

      {/* RIGHT - CONTENT */}
      <div className="dijital_right w-full lg:max-w-[840px] max-w-[450px] mr-[0px] ml-[40px] lg:mr-[40px] lg:ml-[40px] ">
        {/* HEADING */}
        <h2
          className="text-[27px] min-[1040px]:!text-[57.56px] min-[797px]:text-[35px] font-[400] leading-[40px] lg:leading-[50px] text-white md:mt-[30px] mt-[16px] xl:mt-[60px] lg:mt-[40px] mb-[0px] w-[100%] max-w-[70%] md:w-[100%] md:max-w-[100%]"
          style={{
            fontFamily: "var(--font-bebas-neue)",
          }}
        >
          {heading}
        </h2>

        {/* PARAGRAPH */}
        <p
          className="w-full md:max-w-[800px] text-white mt-[0px] lg:mt-[20px] md:mt-[10px] mb-[15px] md:mb-[30px] lg:mb-[35px] text-[13px] lg:text-[19px] md:text-[18px] leading-[24px] lg:leading-[26px] font-[400] md:w-[100%]  max-w-[300px]"
          style={{
            fontFamily: "var(--font-raleway)",
          }}
        >
          {paragraphtext}
        </p>

        {/* BUTTON */}
        <Link
          href={buttonlink}
          className="rounded-[30px] dijitalbtn py-[12px] px-[15px] md:py-[15px] md:px-[33px] text-[14px] md:text-[15px] font-[500] text-white bg-[#FF5722] transition-transform duration-300 
          md:ml-[0px] "
          style={{
            backgroundImage: "linear-gradient(90deg, #ed8104, #ec6a6c)",
            fontFamily: "var(--font-raleway)",
          }}
        >
          {buttontext}
        </Link>
      </div>
    </div>
    </div>
  );
}
