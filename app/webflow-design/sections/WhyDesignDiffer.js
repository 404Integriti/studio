"use client";

import Image from "next/image";
import { whyDesignData } from "@/app/components/customThemePoints";
import Secheading from "@/app/components/secheading"; // ✅ import Section Heading

export default function WhyDesignSection() {
  return (
    <section className="bg-[#f6f6f6] py-24">
      {/* ✅ Added more side margin with px-6 md:px-12 lg:px-20 */}
      <div className="w-full max-w-[1350px] mx-auto px-6 md:px-12 lg:px-20">
        {/* ✅ Section Heading */}
        <Secheading
          classheading="md:text-[32px] text-[24px] font-semibold text-[#333] leading-[36px] md:pb-16 pb-8 text-center"
          heading="Why Design is Different in Webflow"
        />



        {/* ✅ Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {whyDesignData.map((item, idx) => (
            <div
              key={idx}
              className={`${item.wrapperClass} ${idx === 0 ? "sm:mx-0 mx-auto" : ""
                }`}
            >
              {item.type === "imageOnly" ? (
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={item.className}
                />
              ) : (
                <>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className="mb-4"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
