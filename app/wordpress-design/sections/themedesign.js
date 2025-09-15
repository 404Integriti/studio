"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { wordpressdesign } from "../../components/customThemePoints";
import Secheading from "@/app/components/secheading";
import { useState, useEffect } from "react";

// Dynamically import the Lottie Player to avoid SSR issues
const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

export default function ThemeDesign() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="custom-theme-design">
      <div className="w-full max-w-[1350px] mx-auto py-[80px]">
        {/* Section Heading */}
        <Secheading
          classheading="md:text-[32px] text-[24px] font-semibold text-[#333] leading-[36px] md:pb-[80px] pb-[20px] text-center"
          heading="Custom Theme Design"
        />

        <div className="flex lg:flex-row flex-col lg:justify-start justfiy-center lg:gap-[0px] md:gap-[40px] gap-[20px] lg:px-[0px] px-[20px]">
          {/* Left: Lottie animation */}
          <div className="w-full lg:max-w-[50%] max-w-[100%] flex justify-center">
            {isMounted && (
              <Player
                autoplay
                loop
                src="/Lottiejson.json" // ✅ loads from /public
                style={{ height: "400px", width: "100%" }}
              />
            )}
          </div>

          {/* Right: WordPress design points */}
          <div className="flex flex-col gap-[24px] lg:max-w-[50%] max-w-[100%] w-full md:pl-[20px]">
            {wordpressdesign.map((item, index) => (
              <div
                key={index}
                className="w-[100%] rounded-[15px]  lg:max-w-[495px] max-w-[816px] border border-[#e2dbf0] p-[16px] flex gap-[16px]" style={{
                    backgroundColor: item.bgcolor,
                    alignSelf: item.position,
                }}
              >
                {/* Image placeholder (only if you add image later) */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
