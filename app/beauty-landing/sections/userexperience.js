import Image from "next/image";
import { platforms } from "../../components/customThemePoints";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function UserExperience() {
  return (
    <section className="securitybackup pt-[40px] pb-[85px] ">
      {/* lg:gap-70pc */}
      <div className="w-[100%] max-w-[1196px] px-[40px]   flex mx-auto lg:flex-row flex-col relative z-40 ">
        {/* Left column */}
        <div className="lg:w-[50%] w-full text-[14px] leading-[20px]">
          <h2
            className="md:text-[42px] text-[30px]  md:leading-[58px]  leading-[36px] text-[#333] font-[700] lg:text-left text-center mb-[10px]"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            The Platforms Behind Beautiful Brands
          </h2>
          <p
            className="max-w-[722px] sm:text-[20px] text-[16px] text-[#333] 
                       lg:leading-[32px] md:leading-[26px] lg:text-left text-center lg:mx-0 mx-auto"
            style={{ fontFamily: "var(--font-opensans)" }}
          >
            Whether you are launching a minimalist skincare line or scaling a
            bold haircare brand, we guide you to the right tech that is built
            for your growth.
          </p>
        </div>

        {/* Right column */}
        <div className="w-full min-[1280px]:w-[65%] min-[991px]:w-[50%] mx-auto mt-[40px] lg:mt-0 ">
          <div className="flex flex-col gap-[20px] security">
            {platforms.map((item, index) => (
              <div
                key={index}
                className={`rounded-[8px] pt-[15px] pb-[16px] pl-[15px] w-[100%] max-w-[587px]`}
                style={{
                  backgroundColor: item.bgcolor,
                  margin: item.margin,
                }}
              >
                <h3
                  className="text-[24px]  font-[600] leading-[30px] mb-[10px] text-[#333]"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {item.heading}
                </h3>
                <p
                  className="text-[16px] font-[400] leading-[20px] text-[#333]"
                  style={{ fontFamily: "var(--font-opensans)" }}
                >
                  {item.paragraph}
                </p>
              </div>
            ))}

            <div className="flex lg:justify-start justify-center col-span-full">
              <Herobutton
                btnpadfirst="raleway customBrandBtn"
                btnpadsec="hidden"
                buttonwidth="230px"
                buttonheight="50px"
                firstButtonText="Pick the Right Platform"
                secondButtonText="Meet Our Team"
                firstButtonlink="/website-development-servicess"
                secondButtonlink="/portfolio"
              />
            </div>
          </div>
        </div>

        <Image
          src="/securitybg.png"
          height={357}
          width={700}
          className="absolute top-[44%] bottom-auto left-[40px] z-30 md:flex hidden"
          alt="security"
        />
      </div>
    </section>
  );
}
