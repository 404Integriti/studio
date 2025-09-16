"use client";

import Image from "next/image";
import { useState } from "react";

const WebflowSpeedComponent = ({ title, accordionItems, imageSrc }) => {
  const [activeAccordion, setActiveAccordion] = useState(accordionItems[0]?.id || null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="bg-white pt-[30px] pb-[60px]">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Main Heading */}
        <h2
          className="max-[991px]:text-center md:text-[36px] text-[30px] md:leading-[42px] leading-10 font-[600] mb-[43px] mt-[50px] min-[991px]:w-[45%]"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Accordion */}
          <div className="space-y-4 lg:px-[0px] px-[20px]">
            {accordionItems.map((item) => {
              const isActive = activeAccordion === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-[15px] shadow-[0_2px_20px_12px_#effefb] transition-all duration-300 ease-in-out mb-[23px]"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left flex flex-row-reverse items-center justify-end transition-all duration-300 ease-in-out"
                  >
                    <span
                      className="md:text-[22px] text-[18px] font-[700] text-[#333] md:leading-[78px] leading-[30px] h-[80px] transition-all duration-300 ease-in-out"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`text-[40px] text-[#333] mx-[25px] transition-all duration-300 ease-in-out ${isActive ? "rotate-[180deg]" : "rotate-0"}`}
                      style={{
                        fontSize: isActive ? "20px" : "40px",
                        fontWeight: isActive ? "800" : "400",
                        lineHeight: isActive ? "36px" : "normal",
                      }}
                    >
                      {isActive ? "—" : "+"}
                    </span>
                   

                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.description && (
                      <div className="px-6 pb-4">
                        <p
                          className="faq-answer-text pl-[45px] text-[16px] text-[#333] mb-[30px] transition-all duration-300 ease-in-out"
                          style={{ fontFamily: "var(--font-opensans)" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center">
            <div className="w-full h-full flex items-center lg:justify-start justify-center">
              <Image
                src={imageSrc}
                width={459}
                height={297}
                alt="Laptop with rocket illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebflowSpeedComponent;
