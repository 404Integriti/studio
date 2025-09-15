// components/WebflowCCICard.js
import React from "react";
import Image from "next/image";

const WebflowCCICard = ({ title, description, image, tiltDirection, alwaysTilt }) => {
  return (
    <div
      className={`group transition-transform duration-300 ease-in-out transform w-fit mx-auto ${
        alwaysTilt
          ? tiltDirection // permanent tilt
          : tiltDirection === "-rotate-5"
          ? "hover:-rotate-5"
          : "hover:rotate-5"
      }`}
    >
      <div
        className="grid grid-cols-2 max-w-[720px] py-4  bg-[#C7FFF4]  items-center  pr-[20px] rounded-3xl space-y-6 md:space-y-0 mx-auto"
        style={{
          boxShadow: "0 -4px 15px -4px rgba(0, 0, 0, 0.1)", // custom top shadow
        }}
      >
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt="Motion Design Illustration"
            className="max-w-full h-full"
          />
        </div>

        {/* Right Text Content */}
        <div className="min-[767px]:text-center px-[20px]">
          <h3 className="text-[20px] min-[479px]:text-[24px] leading-[30px] font-[700] text-[#333333] mt-[20px] mb-[10px]" style={{fontFamily:"var(--font-raleway)",}} >
            {title}
          </h3>
          <p className="max-[479px]:leading-[20px] font-[400] leading-[27px] text-[#333333] text-[14px] mb-[10px]" style={{
            fontFamily: "var(--font-opensans)",
            }}  >{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WebflowCCICard;
