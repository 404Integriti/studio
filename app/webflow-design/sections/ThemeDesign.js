"use client";

import Image from "next/image";
import { webflowdesign } from "../../components/customThemePoints";
import Secheading from "@/app/components/secheading";
import IconOrangeButton from "@/app/components/OrangeButton/IconOrangeButton"; // ✅ import your button

export default function ThemeDesign() {
  return (
    <section className="custom-theme-design overflow-hidden">
      <div className="w-full max-w-[1350px] mx-auto py-[80px] px-4 lg:px-0">
        {/* Section Heading */}
        <Secheading
          classheading="md:text-[32px] text-[24px] font-semibold text-[#333] leading-[36px] md:pb-[80px] pb-[20px] text-center"
          heading="Figma to webflow Workflows"
        />

        <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:gap-[0px] md:gap-[40px] gap-[20px]">
          {/* Left: WordPress design points */}
          <div className="flex flex-col gap-[24px] lg:max-w-[50%] w-full md:pr-[20px]">
            {webflowdesign.map((item, index) => (
              <div
  key={index}
  className="w-full rounded-[15px] lg:max-w-[495px] border border-[#e2dbf0] p-[16px] flex gap-[16px] 
  transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-transparent hover:-translate-y-1"
  style={{
    backgroundColor: item.bgcolor,
    alignSelf: item.position,
  }}
>

                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.heading}
                    width={36}
                    height={37}
                    className="object-contain"
                  />
                )}

                <div className="flex-1">
                  <h3 className="raleway text-[20px] font-[600] leading-[30px] mb-[6px] text-[#333]">
                    {item.heading}
                  </h3>
                  <p className="sans text-[14px] font-[400] text-[#333]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            {/* ✅ Orange Button */}
            <div className="mt-6 flex justify-start lg:justify-center">
              <IconOrangeButton text="Work With Us" href="/contact-us" />
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:max-w-[50%] flex justify-center relative">
            <Image
              src="https://cdn.prod.website-files.com/683f4d103b2510d5796dca20/683f5784b06f5416dc5b2843_Frame%201597884270.png"
              alt="Workflow Illustration"
              width={700}
              height={500}
              className="object-contain w-full h-auto max-w-[600px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
