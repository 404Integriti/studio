"use client";

import Image from "next/image";
import { whyDesignMatter } from "../../components/customThemePoints";
import Secheading from "@/app/components/secheading"; // ✅ import Section Heading

export default function WhyDesignMatters() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#c7fff4] to-[#f1fffd]">
      <div className="w-full max-w-[1350px] mx-auto">
        {/* ✅ Section Heading */}
        <Secheading
          classheading="md:text-[32px] text-[24px] font-semibold text-[#333] leading-[36px] md:pb-[80px] pb-[20px] text-center"
          heading="Why Design Matters in WordPress"
        />

        {/* ✅ Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyDesignMatter.map((card, i) => (
            <div
              key={i}
              className={`${card.color} rounded-xl p-4 sm:p-5 lg:p-6 transition-colors duration-300 shadow-md hover:shadow-lg text-left`}
            >
              {/* Image */}
              <div className="mb-3">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900 mb-1.5">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
