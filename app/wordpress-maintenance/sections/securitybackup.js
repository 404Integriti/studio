import Image from "next/image"
import { Securitinfo } from "../../components/customThemePoints"


export default function Securitybackup() {
  return (
    <section className="securitybackup pt-[40px] pb-[85px]">
      <div className="w-[100%] max-w-[1400px] lg:px-[40px] px-[20px] flex mx-auto lg:flex-row flex-col lg:gap-[0px] gap-[50px] relative z-40">
        {/* Left column */}
        <div className="w-[100%] lg:max-w-[608px] max-w-[100%]">
          <h2
            className="lg:text-[42px] md:text-[36px] text-[28px] lg:leading-[58px] md:leading-[50px] leading-[40px] text-[#333] font-[700] lg:text-left text-center "
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Security & Backups
          </h2>
        </div>

        {/* Right column */}
        <div className="w-[100%] max-w-[791px] lg:mx-[0px] mx-auto">
          <div className="flex flex-col gap-[20px] security">
            {Securitinfo.map((item, index) => (
              <div
                key={index}
                className="w-[100%] max-w-[587px] rounded-[8px] p-[15px] min-h-[110px]"
                style={{
                  backgroundColor: item.bgcolor,
                  margin: item.margin, // optional if you want flex alignment
               
                }}
              >
                <h3
                  className="lg:text-[24px] text-[21px] font-[600] leading-[30px] mb-[10px]"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {item.heading}
                </h3>
                <p
                  className="text-[16px] font-[400]"
                  style={{ fontFamily: "var(--font-opensans)" }}
                >
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Image
            src="/securitybg.png"
            height={357}
            width={700}
            className="absolute top-[33%] bottom-auto left-[0px]  z-30"
            alt="security"
        />
      </div>
    </section>
  );
}