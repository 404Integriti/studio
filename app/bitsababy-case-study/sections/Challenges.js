import Image from "next/image"
import { bitsaChallenges } from "../../components/customThemePoints"


export default function Challenges() {
  return (
    <section className="securitybackup py-[40px]  lg:pt-[82px] lg:pb-[85px]  bg-[#f6f6f6]">
      <div className="w-[100%] max-w-[1400px] lg:px-[40px] px-[20px] flex mx-auto lg:flex-row flex-col lg:gap-[16px] gap-[50px] relative z-40">
        {/* Left column */}
        <div className="w-[100%]  lg:max-w-[608px] max-w-[100%]">
          <h2
            className="lg:text-[36px] md:text-[30px] text-[28px] lg:leading-[58px] md:leading-[50px] leading-[40px] text-[#333] font-[700] lg:text-left text-center "
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Challenges
          </h2>
        </div>

        {/* Right column */}
        <div className="w-[100%]  max-w-[900px]  lg:mx-[0px] mx-auto">
          <div className="flex flex-col gap-[20px] security ">
            {bitsaChallenges.map((item, index) => (
              <div
                key={index}
                className="w-[100%] max-w-[587px] rounded-[8px] p-[15px] min-h-[110px]"
                style={{
                  backgroundColor: item.bgcolor,
                  margin: item.margin, // optional if you want flex alignment
               
                }}
              >
                <h3
                  className="lg:text-[18px] text-[16px] font-[700] text-[#222222] leading-[30px] mb-[10px]"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {item.heading}
                </h3>
                <p
                  className="text-[16px] font-[500] text-wrap leading-tight "
                  style={{ fontFamily: "var(--font-opensans)" }}
                >
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Image
            src="/bitsaChallenges.png"
            height={360}
            width={640}
            className="absolute top-[18%] bottom-auto left-[-185px]  z-30 hidden lg:block"
            alt="security"
        />
      </div>
    </section>
  );
}