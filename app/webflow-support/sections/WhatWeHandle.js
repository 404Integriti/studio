import { monitoringsupport as monitoringSupportData } from "../../components/customThemePoints";
import Image from "next/image";
import Link from "next/link";

export default function WhatWeHandle() {
  return (
    <section className="py-[40px]">
      <div className="w-[100%] max-w-[1440px] mx-auto flex px-[20px] lg:flex-row flex-col lg:gap-[0px] gap-[50px]">
        {/* Left column */}
        <div className="w-[100%] lg:max-w-[50%] max-w-[100%]">
          <h2
            className="md:text-[36px] text-[24px] font-[600] leading-[36px] mt-[20px] mb-[10px]"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            What We Handle
          </h2>

          {/* Services List */}
          <div className="flex flex-col gap-[30px] mt-[30px]">
            {monitoringSupportData.map((service, index) => (
              <div
                key={index}
                className="w-[100%] bg-[#f6f6f6] rounded-[8px] px-[20px] pt-[20px] pb-[10px] min-h-[120px]"
              >
                <h3
                  className="font-[600] md:text-[24px] text-[21px] leading-[30px] mb-[10px] text-[#333]"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {service.heading}
                </h3>
                <p
                  className="font-[400] text-[16px] leading-[24px] mb-[10px] text-[#333]"
                  style={{ fontFamily: "var(--font-opensans)" }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact-us"
            className="inline-block mt-[30px] w-[100%] max-w-[230px]  text-center py-[12px] text-[#fce4ec] md:text-[20px] text-[18px] rounded-[30px] bg-[#e64a19] hover:bg-[#ed8104] transition-all duration-300"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Work With Us
          </Link>
        </div>

        {/* Right column with image */}
        <div className="w-[100%] lg:max-w-[50%] max-w-[100%] flex justify-center items-center">
          <Image
            src="/frame.png"
            width={452}
            height={500}
            alt="Monitoring & Troubleshooting"
          />
        </div>
      </div>
    </section>
  );
}
