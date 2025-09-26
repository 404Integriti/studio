"use client";

import Herobutton from "@/app/components/herobuttons/herobutton";
import React from "react";
import dynamic from "next/dynamic"; // Dynamically import the Lottie Player to avoid SSR issues
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-[500px] lg:h-[500px] h-full bg-gray-100 animate-pulse rounded-lg"></div>
    ),
  }
);
export default function Maintenance() {
  return (
    <section className="w-[100%] py-[40px]">
      <div className="max-w-[1440px] flex flex-col justify-center items-center  lg:flex-row  px-[10px] sm:px-[40px] lg:px-[60px]">
        <div className="flex flex-col justify-baseline md:w-[80%]  lg:w-[45%]">
          <h4
            className="lg:mt-[60px] text-[30px] sm:text-[36px] lg:pt-[100px] font-[600] leading-[36px] mb-[10px]"
            style={{
              fontFamily: "var(--font-raleway)",
            }}
          >
            Webflow Maintenance{" "}
          </h4>
          <p
            className="lg:w-[100%] xl:w-[90%] text-[16px] leading-[23px] "
            style={{
              fontFamily: "var(--font-opensans)",
            }}
          >
            Keeping your Webflow site running smoothly isn’t just about
            maintenance—it’s about creating an edge. We handle everything from
            updates to technical optimization, ensuring your site performs at
            its best. Behind the scenes, we fine-tune assets and maintain
            fast-loading pages. With strong security protocols and reliable
            backups, your site stays protected. And as your business grows, we
            help evolve and improve your website to keep you ahead of
            competitors.
          </p>
          <div className="flex justify-baseline mt-[29px] ">
            <Herobutton
              btnpadfirst="hero-btn-dental !text-[18px] !max-w-[400px] !mt-[-30px] raleway !px-[32px] !py-[10px] !font-[400] flex"
              btnpadsec="hidden"
              buttonwidth=" sm:!280px"
              buttonheight="!18px"
              firstButtonText="Expolre Webflow Maintenance"
              secondButtonText=""
              firstButtonlink="/contact-us"
              secondButtonlink="/portfolio"
            />
          </div>
        </div>

        <div className="w-[72%] lg:w-[55%] xl:w-[60%] pt-[92px] xl:pt-[40px]">
          <Player
            autoplay
            loop
            src="/world.json"
            style={{ height: "612", width: "639" }}
          />
        </div>
      </div>
    </section>
  );
}
